function introduction(a) {
    return `Hi, my name is ${a}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(b, language="JavaScript") {
    return `Hi, my name is ${b} and I am learning to program in ${language}.`;
}