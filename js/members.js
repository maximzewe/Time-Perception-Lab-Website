// Running list of lab members
const labMembers = {
    current: [
        { name: "Domenica Bueti", 
            role: "Principal Investigator",
            category: "Principal Investigator",
            img: "img/domenica_bueti.jpg",
            description:`
                <p>Since 2016, I have been Professor of Cognitive Neuroscience at SISSA in Trieste, where I lead the Time Perception Lab. I have always been fascinated by 
                how our brain gives shape to something as elusive as time, how we feel its flow, how it stretches or contracts depending on what we see, or feel. My research 
                explores these questions by combining behavioral, neuroimaging, and brain stimulation techniques to uncover the neural mechanisms that make us experience time.</p>

                <p>I graduated in Psychology from the University of Padova and earned a PhD in Cognitive Neuroscience from the University of Rome “La Sapienza.” Before landing in 
                Trieste, I enjoyed science and life in several places: at University College London’s Institute of Cognitive Neuroscience, at the University Hospital of Lausanne 
                and EPFL in Switzerland, and at Fondazione Santa Lucia in Rome.</p>

                <p>Outside the lab, I love reading popular science books, dancing classical ballet and playing tennis. I’m an enthusiastic fan of Jannik Sinner.</p>
            ` },
        { name: "Nicola Binetti",
            role: "Independent Researcher", 
            category: "Visiting Scientists",
            img: "img/nicola_binetti.jpg" },
        { name: "Gianfranco Fortunato", 
            role: "Postdoc",
            category: "Postdocs",
            img: "img/gianfranco_fortunato.jpg"},
        { name: "Monika Riegel", 
            role: "Postdoc", 
            category: "Postdocs",
            img: "img/monika_riegel.jpeg",
            bullets: [
                "Marie Skłodowska Curie Fellow 2023-now, CISA (University of Geneva) and SISSA",
                "Postdoc, University of Geneva",
                "Postdoc, Columbia University, New York City",
                "PhD Neurobiology, Nencki Institute of Experimental Biology, Warsaw",
                "MSc Psychology and MA English Studies, University of Warsaw"
            ],
            extra: "<strong>Research Interest</strong>: Episodic memory, event segmentation, time perception, stress, emotion, neuroendocrinology<br>\
            <strong>Loves</strong>: Being in the mountains" },
        { name: "Valeria Centanino", 
            role: "Postdoc", 
            category: "Postdocs",
            img: "img/valeria_centanino.jpg",
            bullets: [
                "Postdoctoral Research Fellow 2024 - now",
                "PhD Cognitive Neuroscience, SISSA",
                "MSc Neurobiology, University of Pavia",
                "BSc Biotechnology, University of Torino"
            ],
            extra: "<strong>Research Interest</strong>: Neural coding of temporal information, neuroimaging, predictive processing<br>\
            <strong>Shaped by</strong>: Time in the mountains and Italo Calvino" },
        { name: "Raquel Fernández Martín", 
            role: "Postdoc",
            category: "Postdocs", 
            img: "img/raquel_fernandez.jpg",
            bullets: [
                "Postdoctoral Research Fellow 2024 - now",
                "PhD Physics, Universidad Autónoma de Madrid (UAM)",
                "MSc Theoretical Physics: Elementary Particles and Cosmology, Institute of Theoretical Physics (IFT)",
                "BSc Physics, Universidad Autónoma de Madrid (UAM)"
            ],
            extra: "<strong>Research Interest</strong>: Neural mechanisms of time perception, EEG analysis methods, including causal inference, supervised and unsupervised approaches<br>\
            <strong>Beyond Research</strong>: I love classical music, whether I'm listening to or attempting to play it" },
        { name: "Aybüke Durmaz", 
            role: "PhD Candidate", 
            category: "PhD Candidates",
            img: "img/aybuke_durmaz.jpg",
            bullets: [
                "PhD Candidate 2021 - now",
                "MSc Cognitive Science, CIMeC (University of Trento)",
                "BSc Psychology, Boğaziçi University, Istanbul"
            ],
            extra: "<strong>Research Interest</strong>: Perceptual decision-making, time perception, time-irreversibility in cognition, psychophysics, computational modelling, human behavioural experiments, EEG<br>\
            <strong>Outside the Lab</strong>: Indie video games and graphic novels" },
        { name: "Cansu Kazan", 
            role: "PhD Candidate", 
            category: "PhD Candidates",
            img: "img/cansu_kazan.jpeg",
            bullets: [
                "PhD Candidate 2024 - now",
                "MSc Cognitive and Clinical Neuroscience: Cognitive Neuroscience, Maastricht University",
                "BSc Liberal Arts & Sciences, Maastricht University"
            ],
            extra: "<strong>Research Interest</strong>: Dynamic Bayesian inference of internal temporal states, visual and illusion perception<br>\
            <strong>Hobbies</strong>: DIY projects, basketball, gaming" },
        { name: "Edoardo Rossi", 
            role: "PhD Candidate", 
            category: "PhD Candidates",
            img: "img/edoardo_rossi.jpeg",
            bullets: [
                "PhD Candidate 2024 - now",
                "LM Psicologia Cognitiva Applicata, Università degli Studi di Padova",
                "LT Psicologia dello Sviluppo, della Personalità e delle Relazioni Interpersonali, Università degli Studi di Padova"
            ],
            extra: "<strong>Research Interests</strong>: Magnitude perception and integration, in particular between time and numerosity <br><strong>Listens to</strong>: Kraftwerk, Cocteau Twins, Lil B, Björk" },
        { name: "Maxim Zewe", 
            role: "PhD Candidate", 
            category: "PhD Candidates",
            img: "img/maxim_zewe.jpeg",
            bullets: [
                "PhD Candidate 2024 - now",
                "MSc Physics & Astronomy, University of Amsterdam & Vrije Universiteit",
                "BSc Liberal Arts & Sciences, University College Roosevelt"
            ],
            extra: "<strong>Research Interests</strong>: Efficient coding in time perception, information theory, inference<br><strong>Listens to</strong>: FKA Twigs, Arca, Talking Heads" },
            { name: "Gabriele Pierguidi", 
                role: "PhD Candidate", 
                category: "PhD Candidates",
                img: "img/gabriele_pierguidi.jpeg",
                bullets: [
                    "PhD candidate 2025 - now",
                    "MSc Cognitive Science, CIMeC (University of Trento)",
                    "BA Philosophy, University of Pisa"
                ], 
                extra: "<strong>Research Interests</strong>: Sensory codes of time, subjective sense of time<br><strong>Reads</strong>: Kant, Hume and Spinoza"},
            { name: "Martina Maddaluno", 
                role: "MSc Student", 
                category: "MSc Students",
                img: "img/martina_maddaluno.jpg",
                bullets: [
                    "MSc student 2025 - now",
                    "rMA Media, Art and Performance Studies, Utrecht University",
                    "BA Philosophy, University of Rome"
                ], 
                extra: "<strong>Research Interests</strong>: Multisensory integration, interoception and the creation of selfhood, consciousness research<br>\
                <strong>Working on</strong>: V1-SMA interaction in the processing of visual duration and trying to wrap my head around relational blockworld theory's view of time<br>\
                <strong>Likes</strong>: Dancing, experiencing wonder and awe"  },
            { name: "Giovanni Avelli", 
                role: "MSc Student",
                category: "MSc Students", 
                img: "img/giovanni_avelli.jpeg",
                bullets: [
                    "MSc student 2025 - now",
                    "BA Philosophy, University of Genoa"
                ], 
                extra: "<strong>Research Interests</strong>: Altered states of consciousness, psychedelic substances, evolution of language and time perception<br>\
                <strong>Working on</strong>: Effects of visual field inhomogeneities on duration discrimination and space-time integration in early visual regions<br>\
                <strong>Personal</strong>: Amateur musician and outdoor sports enthousiast" }
    // add more members here...
        ],
    alumni: [
        { name: "Anna Tonon Appiani",
            role: "Postdoc",
            currently: "Psychotherapy trainee, Trieste",
            img: "img/anna_tonon.png"
        },
        { name: "Francesca Iris Bellotti",
            role: "PhD Candidate",
            currently: "WHO Collaborating Centre for Maternal and Child Health, Trieste",
            img: "img/francesca_bellotti.jpg"
        },
        { name: "Mahlet Kassa",
            role: "MSc Student",
            currently: "Berlin School of Mind and Brain",
            img: "img/mahlet_kassa.png"
        },
        { name: "Romain Brasselet",
            role: "Postdoc",
            currently: "CNRS, INSERM, Sorbonne University",
            img: "img/romain_brasselet.jfif"
        },
        { name: "Brent Parsons",
            role: "Postdoc",
            currently: "Smith-Kettlewell Eye Research Institute, San Francisco",
            img: "img/brent_parsons.jpg"
        },
        { name: "Sarah Maass",
            role: "MSc Student",
            currently: "University of Groningen",
            img: "img/sarah_maass.jpg"
        },
        { name: "Filip Agatic",
            role: "PhD Candidate",
            currently: "Data scientists at BrainTrip, Slovenia",
            img: "img/filip_agatic.png"
        },
        { name: "Dario Tascio",
            role: "MSc Student",
            currently: "University of Bonn",
            img: "img/dario_tascio.jpg"
        },
        { name: "Dunia Giomo",
            role: "PhD Candidate",
            currently: "Postdoc at University of Rome 'La Sapienza' ",
            img: "img/dunia_giomo.jpg"
        },
        { name: "Federico Mancinelli",
            role: "Postdoc",
            currently: "University of Bonn",
            img: "img/TPL_logo_black.png"
        },
        { name: "Giulia Pizzoleo",
            role: "MSc Student",
            currently: "IRCCS Fatabenefratelli, Brescia",
            img: "img/TPL_logo_black.png"
        },
        { name: "Yelena Tonoyan",
            role: "Postdoc",
            currently: "Italian Institute of Technology (IIT), Genova",
            img: "img/yelena_tonoyan.jpg"
        },
        { name: "Emma Visibelli",
            role: "MSc Student",
            currently: "University of Padova",
            img: "img/TPL_logo_black.png"
        },
        { name: "Michele Fornaciai",
            role: "Postdoc",
            currently: "UC Louvain with a second Marie Skłodowska-Curie grant",
            img: "img/michele_fornaciai.jpg"
        },
        { name: "Andrea Solmi",
            role: "PhD Candidate",
            currently: "Research project manager at University of Milan",
            img: "img/andrea_solmi.jpg"
        },
        { name: "Chiara Zanonato",
            role: "MSc Student",
            currently: "Max Planck Institute, Tübingen",
            img: "img/TPL_logo_black.png"
        },
        { name: "Anna Fehrenbach",
            role: "MSc Student",
            currently: "PearUp/Eduki start-up",
            img: "img/anna_fehrenbach.png"
        },
        { name: "Irene Togoli",
            role: "Postdoc",
            currently: "UC Louvain with independent funds",
            img: "img/irene_togoli.jpg"
        },
        { name: "Shrikanth Kulashekhar",
            role: "Postdoc",
            currently: "University Hospital of Helsinki",
            img: "img/shrikanth_kulashekhar.jpg"
        },
        { name: "Foteini Protopapa",
            role: "Postdoc",
            currently: "Data scientist at Bosch, Stuttgart",
            img: "img/foteini_protopapa.jpg"
        }
    // add more alumni here...
            ]
};