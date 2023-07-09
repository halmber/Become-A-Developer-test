type TUnique = Map<string, number>;

const findUniqueFromEntity = (arr: string[] | string): string => {
    const unique: TUnique = new Map();
    const items = Array.isArray(arr) ? arr : [arr];

    for (const item of items) {
        for (const letter of item) {
            unique.set(letter, (unique.get(letter) || 0) + 1);
        }
    }
    for (const [key, value] of unique) {
        if (value === 1) {
            return key;
        }
    }
    return "there is not what is needed";
};

const findUniqueLetter = (str: string): string => {
    const words = str.split(/[.,:;\s-!?'"()]+/);
    const uniqueInWords = words.map((item) => findUniqueFromEntity(item));

    return findUniqueFromEntity(uniqueInWords);
};

const input = `The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"`;
const input2 = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (c) Bjarne Stroustrup`;
console.log(findUniqueLetter(input));
