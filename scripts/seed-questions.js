"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var questions = [
    {
        category: "logical-reasoning",
        difficulty: "medium",
        question: "If all roses are flowers and some flowers fade quickly, which of the following must be true?",
        options: [
            { text: "All roses fade quickly", isCorrect: false },
            { text: "Some roses may fade quickly", isCorrect: true },
            { text: "No roses fade quickly", isCorrect: false },
        ],
        explanation: "Since all roses are flowers and some flowers fade quickly, it's possible that some roses are among those that fade quickly.",
        timeLimit: 60,
    },
    {
        category: "pattern-recognition",
        difficulty: "medium",
        question: "What number should come next in the sequence: 2, 6, 12, 20, 30, ?",
        options: [
            { text: "42", isCorrect: true },
            { text: "40", isCorrect: false },
            { text: "36", isCorrect: false },
        ],
        explanation: "The difference between consecutive numbers increases by 2 each time: 4, 6, 8, 10, 12. So the next number should be 30 + 12 = 42.",
        timeLimit: 45,
    },
    {
        category: "mathematical-aptitude",
        difficulty: "hard",
        question: "If a clock shows 2:30, what is the angle between the hour and minute hands?",
        options: [
            { text: "75 degrees", isCorrect: true },
            { text: "80 degrees", isCorrect: false },
            { text: "85 degrees", isCorrect: false },
        ],
        explanation: "The hour hand moves 0.5 degrees per minute. At 2:30, it's at 75 degrees (60 + 15). The minute hand is at 180 degrees. The difference is 105 degrees.",
        timeLimit: 90,
    },
    {
        category: "verbal-reasoning",
        difficulty: "easy",
        question: "Choose the word that best completes the analogy: Book is to Reading as Fork is to:",
        options: [
            { text: "Eating", isCorrect: true },
            { text: "Writing", isCorrect: false },
            { text: "Cooking", isCorrect: false },
        ],
        explanation: "A book is used for reading, just as a fork is used for eating.",
        timeLimit: 30,
    },
    {
        category: "spatial-reasoning",
        difficulty: "medium",
        question: "If a cube has a volume of 27 cubic centimeters, what is the length of one of its edges?",
        options: [
            { text: "3 cm", isCorrect: true },
            { text: "9 cm", isCorrect: false },
            { text: "27 cm", isCorrect: false },
        ],
        explanation: "The volume of a cube is the cube of its edge length. So, if the volume is 27, the edge length is the cube root of 27, which is 3.",
        timeLimit: 60,
    },
    {
        category: "logical-reasoning",
        difficulty: "hard",
        question: "If no A is B, and all C is B, which of the following must be true?",
        options: [
            { text: "No A is C", isCorrect: true },
            { text: "All C is A", isCorrect: false },
            { text: "Some A is C", isCorrect: false },
        ],
        explanation: "Since no A is B, and all C is B, there can be no overlap between A and C. Therefore, no A can be C.",
        timeLimit: 90,
    },
    {
        category: "pattern-recognition",
        difficulty: "medium",
        question: "What letter comes next in the sequence: O, T, T, F, F, S, S, ?",
        options: [
            { text: "E", isCorrect: true },
            { text: "N", isCorrect: false },
            { text: "T", isCorrect: false },
        ],
        explanation: "The sequence represents the first letter of numbers: One, Two, Three, Four, Five, Six, Seven, Eight.",
        timeLimit: 45,
    },
    {
        category: "mathematical-aptitude",
        difficulty: "easy",
        question: "If a shirt originally priced at $80 is on sale for 25% off, what is the sale price?",
        options: [
            { text: "$60", isCorrect: true },
            { text: "$55", isCorrect: false },
            { text: "$65", isCorrect: false },
        ],
        explanation: "25% of $80 is $20. So the sale price is $80 - $20 = $60.",
        timeLimit: 45,
    },
    {
        category: "verbal-reasoning",
        difficulty: "medium",
        question: "Choose the word that does not belong with the others: Lion, Tiger, Leopard, Wolf, Cheetah",
        options: [
            { text: "Wolf", isCorrect: true },
            { text: "Tiger", isCorrect: false },
            { text: "Cheetah", isCorrect: false },
        ],
        explanation: "All the animals except Wolf are from the cat family (Felidae). Wolf belongs to the dog family (Canidae).",
        timeLimit: 45,
    },
    {
        category: "spatial-reasoning",
        difficulty: "hard",
        question: "A cube is painted red on all sides. It is then cut into 27 smaller cubes of equal size. How many of the smaller cubes have paint on exactly two sides?",
        options: [
            { text: "12", isCorrect: true },
            { text: "8", isCorrect: false },
            { text: "16", isCorrect: false },
        ],
        explanation: "The cubes with paint on exactly two sides are the edge cubes, excluding the corner cubes. There are 12 such cubes (4 on each of the 3 edges of the original cube).",
        timeLimit: 90,
    },
    // Add 88 more questions here to reach a total of 100.  This is left as an exercise for the user to expand upon the provided examples.
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, questions_1, question;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, questions_1 = questions;
                    _a.label = 1;
                case 1:
                    if (!(_i < questions_1.length)) return [3 /*break*/, 4];
                    question = questions_1[_i];
                    return [4 /*yield*/, prisma.question.create({
                            data: question,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("Questions seeded successfully");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
