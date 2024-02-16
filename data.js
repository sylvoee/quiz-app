let myQuestions = [{
        quest: "What is an Acid ?",
        options: ["A substance that is black", "A Hydrogen", "A solid", "A corrosive liquid"],
        ans: "A corrosive liquid"
    },
    {
        quest: " The organelle which eliminate water from the body of protozoa is",
        options: ["plasma membrane", "contractile vacuole", "cell wall", "protoplasm"],
        ans: "contractile vacuole",
    },

    {
        quest: "The cell is a functional unit of living organisms because",
        options: ["multicellular organisms are made up of cells",
            "all cells in a multicellular organism function as a single cell",
            "the function of a multicellular organism is the sum total of the functions of its constituent cells",
            "The function of a single cell is superior to that of the multicellular organism"
        ],
        ans: "multicellular organisms are made up of cells"
    },

    {
        quest: "The mechanism of gaseous exchange in living organisms is essentially by",
        options: ["osmosis", "inhalation", "Texhalation", "diffusion"],
        ans: "diffusion"
    },

    {
        quest: "How many color does a rainbow has ? ",
        options: ["Seven", "Five", "Six", "Eight"],
        ans: "Seven"
    },

    {
        quest: " The process of anearobic respiration of yeast in sugar solution is known as",
        options: ["fermentation", "aerobic", "pyruvic acid", "diffusion"],
        ans: "fermentation"
    }, {
        quest: "Muscles are attached to bones by means of",
        options: ["ligament", "cartilage", "synovial membrane", "tendons"],
        ans: "tendons"
    },

    {
        quest: "Which of the following tissues is not found in the stem and root of monocotyledons?",
        options: ["Xylem", "Cambium", " Pith", "Cortexica"],
        ans: "Pith"
    },

    {
        quest: "The upper part of the trachea in mammals is called",
        options: ["palate", "epiglottis", "larynx", "glottis"],
        ans: "larynx"
    },

    {
        quest: "Which of the following parts of the mammalian skin is directly is directly involved in excretion ?",
        options: ["Sebaceous gland", "Sweat gland", "Hormy layer", "Hair follicle"],
        ans: "Sweat gland"
    },

    {
        quest: "Kidney stone is a disease of the Kidney that result in the",
        options: ["blockage of the tubules by solid particles",
            "passing out useful materials of the body fluid within the urine",
            "presence of large quantity of water in urine",
            "passing out hormones in the urine"
        ],
        ans: "blockage of the tubules by solid particles"
    },

    {
        quest: "The following are the activities of the liver except",
        options: ["production of heatem",
            "manufacture of bile",
            "detoxication of alcohol and drugs",
            "maintenance of osmotic balancea"
        ],
        ans: "maintenance of osmotic balanceth"
    },

    {
        quest: "Infective hepatitis is a disease of the",
        options: ["heart", "kidney", "liver", "stomach"],
        ans: "stomach"
    },

    {
        quest: "Growing radicles of seddlings are",
        options: ["negatively phototropic", "positively phototropic", "negatively geotropic", "negatively hydrotropic"],
        ans: "stomach"
    },

    {
        quest: "Over-secretion of thyroxin is likely to lead to",
        options: ["hinness in body", "sluggishness", "cretinism in infantr", "reduced metabolism"],
        ans: "thinness in body"
    },

    {
        quest: "The human skin is regarded as a sense organ because it",
        options: ["protects the body from cold and heat",
            "separates the body from the outside world",
            "has nerve endings",
            "has an outer layer of dead cells"
        ],
        ans: "has nerve endings"

    },

    {
        quest: "Which part of the ear is responsible for the maintenance of balance?",
        options: ["Ossicles", "Tympanic membrane", "Eustachian tube", "emicircular canals"],
        ans: "semicircular canals"
    },

    {
        quest: "Which of the following substance from the mother's blood diffuse through the placenta into the blood vessels of the feotus ?",
        options: ["Carbon dioxide and oxygen", "Glycogen and starch", "Glucose and oxygen", "Urea and carbon dioxide"],
        ans: "Glucose and oxygen"
    },

    {
        quest: "The bicuspid valve is located between",
        options: ["Ossicles", "right auricle and right ventricle", "left and right ventricle", "left and right auricle"],
        ans: "left auricle and left ventricle"
    },

    {
        quest: "Pellagra can be prevented by taking food rich in?",
        options: ["vitamin A", "vitamin B", "Vitamin D", "calcium"],
        ans: "vitamin B"
    },

    {
        quest: "In testing for a reducing sugar, the food substance is usually warmed with",
        options: ["sulphuric acid", "million's reagent", "Vitamin D", "sudan III"],
        ans: "sudan III"
    },


    {
        quest: "One of these is not a characteristics of living things",
        options: ["movement", "Respiration", "Reproduction", "diffusion"],
        ans: "diffusion"
    },


    {
        quest: "One of these is a cell property",
        options: ["Osmosis", "filling", "mating", "cunning"],
        ans: "Osmosis"
    },


    {
        quest: "One of these is a nonliving",
        options: ["Stone", "Fish", "Fowl", "Goat"],
        ans: "Stone"
    },

    {
        quest: "The ability of living thing to respond to stimuli is called ",
        options: ["Movement", "Irritability", "Respiration", "Growth"],
        ans: "Irritability"
    }




]

let questions = [];

for (let j = 0; j < myQuestions.length; j++) {
    if (j < 10) {
        let randIndex = Math.floor(Math.random() * myQuestions.length);
        questions.push(myQuestions[randIndex]);


    }
}