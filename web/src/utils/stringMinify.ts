export const gql = (literals: TemplateStringsArray, ...substitutions: any[]) => {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i] + substitutions[i];
    }
    result += literals[literals.length - 1];
    return result.replace(/\s+/g, " ").trim();
};
