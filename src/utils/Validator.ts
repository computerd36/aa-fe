export interface ValidationResult {
    isValid: boolean;
    errorMessage?: string
}

export const isValidInput = (input: string): ValidationResult => {
    // trim input
    input = input.trim();

    // check min length
    if (input.length < 3) {
        return {
            isValid: false,
            errorMessage: "components.setup.step2.min3chars"
        }
    }

    //check max length
    if (input.length > 20) {
        return {
            isValid: false,
            errorMessage: "components.setup.step2.max20chars"
        }
    }

    // check if only contains letters and numbers
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(input)) {
        return {
            isValid: false,
            errorMessage: "components.setup.step2.onlyLettersAndNumbers"
        }
    }

    return {
        isValid: true
    }
};