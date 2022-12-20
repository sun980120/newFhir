export enum NarrativeStatus {
    GENERATED = "generated",
    EXTENSIONS = "extensions",
    ADDITIONAL = "additional",
    EMPTY = "empty",
}
export enum IdentifierUse {
    USUAL = "usual",
    OFFICIAL = "official",
    TEMP = "temp",
    SECONDARY = "secondary",
    OLD = "old",
}
export enum NodeType {
    Element,
    Text,
    Comment,
    DocType,
    Document,
    Instruction
}
export enum NameUse {
    USUAL = 'usual',
    OFFICIAL = 'official',
    TEMP = 'temp',
    NICKNAME = 'nickname',
    ANONYMOUS = 'anonymous',
    OLD = 'old',
    MAIDEN = 'maiden',
}