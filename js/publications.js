// Running list of publications
const publications = [
    {
    title: "Different modality-specific mechanisms mediate perceptual history effects in vision and audition",
    authors: "I Togoli, M Fornaciai, D Bueti",
    journal: "BMC Biology (accepted)",
    year: "2026",
    link: "https://doi.org/10.1101/2022.08.07.503081"
    },
    {
    title: "The interaction of speed and time in biasing the perception of dynamically changing visual inputs",
    authors: "F Bellotti, D Bueti",
    journal: "Journal of Vision (accepted)",
    year: "2026",
    link: ""
    },
    {
    title: "Global and local deviance effects in the processing of temporal patterns",
    authors: "D Giomo, R Brasselet, D Bueti",
    journal: "Ann. N.Y. Acad. Sci.",
    year: "2026",
    link: "https://doi.org/10.1111/nyas.70173"
    },
    {
    title: "Magnitude processing and integration entail perceptual processes independent from the task",
    authors: "I Togoli, O Collignon, D Bueti, M Fornaciai",
    journal: "Imaging Neuroscience",
    year: "2025",
    link: "https://doi.org/10.1162/imag_a_00485"
    },
    {
    title: "The neural link between stimulus duration and spatial location in the human visual hierarchy",
    authors: "V Centanino, G Fortunato & D Bueti",
    journal: "Nature Communications 15 (1), 10720",
    year: 2024,
    link: "https://doi.org/10.1038/s41467-024-54336-5"
    },
    {
    title: "The mechanisms and neural signature of average numerosity perception",
    authors: "I Togoli, O Collignon, D Bueti, M Fornaciai",
    journal: "Journal of Cognitive Neuroscience",
    year: 2024,
    link: "https://doi.org/10.1162/jocn_a_02263"
    },  
    {
    title: "Robust inference of causality in high-dimensional processes from the Information Imbalance of distance ranks",
    authors: "V Del Tatto, G Fortunato, D Bueti, A Laio",
    year: 2024,
    journal: "Proceedings of the National Academy of Sciences (PNAS)",
    link: "https://doi.org/10.1073/pnas.2317256121"
    },
    {
    title: "Topographic Connectivity in a Duration Selective Cortico-Cerebellar Network",
    authors: "F Protopapa, M.J. Hayashi, R Kanai, D Bueti",
    year: 2023,
    journal: "Scientific Reports Nov 24;13(1):20674",
    link: "https://doi.org/10.1038/s41598-023-47954-4"
    },
    {
    title: "Perceptual history biases are predicted by early visual-evoked activity",
    authors: "M Fornaciai, I Togoli, D Bueti",
    year: 2023,
    journal: "Journal of Neuroscience",
    link: "https://doi.org/10.1523/JNEUROSCI.1451-22.2023"
    },
    {
    title: "The more numerous the longer: how the integration between numerosity and time leads to a common neural response",
    authors: "G Fortunato, I Togoli, D Bueti",
    year: 2023,
    journal: "Proceedings of the Royal Society B: Biological Sciences",
    link: "https://doi.org/10.1098/rspb.2023.0260"
    },
    {
    title: "Subjective time is predicted by local and early visual processing",
    authors: "Y Tonoyan, M Fornaciai, B Parsons, D Bueti",
    year: 2022,
    journal: "NeuroImage",
    link: "https://doi.org/10.1016/j.neuroimage.2022.119707"
    },
    {
    title: "The nature of magnitude integration: contextual interference vs. active magnitude binding",
    authors: "I Togoli, D Bueti, M Fornaciai",
    year: 2022,
    journal: "Journal of Vision",
    link: "https://doi.org/10.1167/jov.22.11.11"
    },
    {
    title: "The specious interaction of time and numerosity perception",
    authors: "I Togoli, M Fornaciai, D Bueti",
    year: 2021,
    journal: "Proceedings of the Royal Society B: Biological Sciences",
    link: "https://doi.org/10.1098/rspb.2021.1577"
    },
    {
    title: "Serial dependence in time and numerosity perception is dimension-specific",
    authors: "I Togoli, M Fedele, M Fornaciai, D Bueti",
    year: 2021,
    journal: "Journal of Vision",
    volume: "21(5):6",
    pages: "1-15",
    link: "https://doi.org/10.1167/jov.21.5.6"
    },
    {
    title: "Time Processing: Multiple Topographic Representations of Time across Human Cortex",
    authors: "D Bueti",
    year: 2020,
    journal: "Current Biology",
    link: "https://doi.org/10.1016/j.cub.2020.02.059"
    },
    {
    title: "Chronotopic maps in human supplementary motor area",
    authors: "F Protopapa, M.J. Hayashi, S Kulashekhar, W van der Zwaag, G Battistella, M.M. Murray, D Bueti",
    year: 2019,
    journal: "PLoS Biology",
    volume: "17(3)",
    article_id: "e3000026",
    link: "https://doi.org/10.1371/journal.pbio.3000026"
    },
    {
    title: "Correlates of a Cold Pressor Test Measured by Ultra-High Field fMRI",
    authors: "M.C. Hendriks-Balk, F Megdiche, L Pezzi, O Reynaud, S Da Costa, D Bueti, D Van De Ville, G Wuerzner",
    year: 2020,
    journal: "Frontiers in Neuroscience",
    link: "https://doi.org/10.3389/fnins.2020.00039"
    },
    {
    title: "Body odors (even when masked) make you more emotional: behavioral and neural insights",
    authors: "C Cecchetto, E Lancini, D Bueti, R.I. Rumiati, V Parma",
    year: 2019,
    journal: "Scientific Reports, 9(1), 5489",
    link: "https://doi.org/10.1038/s41598-019-41937-0"
    },
    {
    title: "Representations of time in human frontoparietal cortex",
    authors: "M.J. Hayashi, W van der Zwaag, D Bueti, R Kanai",
    year: 2018,
    journal: "Communications Biology, 1(1), 233",
    link: "https://doi.org/10.1038/s42003-018-0243z"
    },
    {
    title: "EEG correlates of preparatory orienting, contextual updating and inhibition of sensory processing in left spatial neglect",
    authors: "S Lasaponara, M D’Onofrio, M Pinto, A Dragone, D Menicagli, D Bueti, M De Lucia, F Tomaiuolo, F Doricchi",
    year: 2018,
    journal: "Journal of Neuroscience",
    link: "https://doi.org/10.1523/JNEUROSCI.2817-17.2018"
    },
    {
    title: "The Neurobiology of Time Processing",
    authors: "F Frassinetti, M Cappelletti, D Bueti",
    year: 2016,
    journal: "Neural Plasticity",
    link: "https://doi.org/10.1155/2016/1706373"
    },
    {
    title: "Temporal Perceptual Learning",
    authors: "D Bueti, D.V. Buonomano",
    year: 2014,
    journal: "Timing and Time Perception, 2, 261–289",
    link: "https://doi.org/10.1163/22134468-00002023"
    },
    {
    title: "How the visual brain encodes and keeps track of time",
    authors: "P Salvioni, M.M. Murray, L Kalmbach, D Bueti",
    year: 2013,
    journal: "Journal of Neuroscience, 33, 12423–12429",
    link: "https://doi.org/10.1523/JNEUROSCI.5146-12.2013"
    },
    {
    title: "Adaptive tuning of perceptual timing to vestibular stimulation",
    authors: "N Binetti, I Siegler, D Bueti*, F Doricchi*",
    year: 2013,
    journal: "Neuropsychologia, 51, 197–210 (special issue on Time Processing)",
    link: "https://doi.org/10.1016/j.neuropsychologia.2012.10.029"
    },
    {
    title: "Contributions of pitch and bandwidth to sound-induced enhancement of visual cortex excitability in humans",
    authors: "L Spierer, A Manuel, D Bueti, M.M. Murray",
    year: 2013,
    journal: "Cortex, 49, 2727–2733",
    link: "https://doi.org/10.1016/j.cortex.2013.01.001"
    },
    {
    title: "Learning about time: Plastic Changes and Individual Brain Differences",
    authors: "D Bueti, S Lasaponara, M Cercignani, E Macaluso",
    year: 2012,
    journal: "Neuron, 75, 725–737",
    link: "http://dx.doi.org/10.1016/j.neuron.2012.07.019"
    },
    {
    title: "No inherent left and right side in human ‘mental number line’: evidence from right brain damage",
    authors: "M Aiello, S.J. Courtois, S Merola, T Ottaviani, F Tomaiuolo, D Bueti, Y Rossetti, F Doricchi",
    year: 2012,
    journal: "Brain, 135, 2492–2505",
    link: "https://doi.org/10.1093/brain/aws114"
    },
    {
    title: "The sensory representation of time",
    authors: "D Bueti",
    year: 2011,
    journal: "Frontiers in Integrative Neuroscience, 5, 34",
    link: "10.3389/fnint.2011.00034"
    },
    {
    title: "Physiological correlates of subjective time: evidence for the temporal accumulator hypothesis",
    authors: "D Bueti, E Macaluso",
    year: 2011,
    journal: "NeuroImage, 57, 1251–1263",
    link: "https://doi.org/10.1016/j.neuroimage.2011.05.014"
    },
    {
    title: "Modality-independent role of the primary auditory cortex in time estimation",
    authors: "R Kanai, H Lloyd, D Bueti, V Walsh",
    year: 2011,
    journal: "Experimental Brain Research, 209, 465–471",
    link: "https://doi.org/10.1007/s00221-011-2577-3"
    },
    {
    title: "Adaptive motion processing in bilateral vestibular failure",
    authors: "R Kalla, N Muggleton, R Spiegel, D Bueti, J Claassen, V Walsh, A Bronstein",
    year: 2011,
    journal: "Journal of Neurology, Neurosurgery & Psychiatry, 82, 1212–1216",
    link: "10.1136/jnnp.2010.235960"
    },
    {
    title: "Contribution of frontal cortex to the spatial representation of number",
    authors: "E Rusconi, D Bueti, V Walsh, B Butterworth",
    year: 2011,
    journal: "Cortex, 47, 2–13",
    link: "https://doi.org/10.1016/j.cortex.2009.08.005"
    },
    {
    title: "Encoding of temporal probabilities in the human brain",
    authors: "D Bueti, B Bahrami, V Walsh, G Rees",
    year: 2010,
    journal: "Journal of Neuroscience, 30, 4343–4352",
    link: "https://doi.org/10.1523/JNEUROSCI.2254-09.2010"
    },
    {
    title: "Memory for time distinguishes between perception and action",
    authors: "D Bueti, V Walsh",
    year: 2010,
    journal: "Perception, 39, 81–90",
    link: "https://doi.org/10.1068/p6405"
    },
    {
    title: "Auditory temporal expectations modulate activity in visual cortex",
    authors: "D Bueti, E Macaluso",
    year: 2010,
    journal: "NeuroImage, 51, 1168–1183",
    link: "https://doi.org/10.1016/j.neuroimage.2010.03.023"
    },
    {
    title: "Time in motion: effects of whole-body rotatory accelerations on timekeeping processes",
    authors: "N Binetti, I.A. Siegler, D Bueti, F Doricchi",
    year: 2010,
    journal: "Neuropsychologia, 48, 1842–1852",
    link: "https://doi.org/10.1016/j.neuropsychologia.2010.03.009"
    },
    {
    title: "The parietal cortex and the representation of time, space, number and other magnitudes",
    authors: "D Bueti, V Walsh",
    year: 2009,
    journal: "Philosophical Transactions of the Royal Society B: Biological Sciences, 364, 1831–1840",
    link: "https://doi.org/10.1098/rstb.2009.0028"
    },
    {
    title: "The role of superior temporal cortex in auditory timing",
    authors: "D Bueti, E.V. van Dongen, V Walsh",
    year: 2008,
    journal: "PLoS ONE, 3, e2481",
    link: "https://doi.org/10.1371/journal.pone.0002481"
    },
    {
    title: "Different brain circuits underlie motor and perceptual representations of temporal intervals",
    authors: "D Bueti, V Walsh, C Frith, G Rees",
    year: 2008,
    journal: "Journal of Cognitive Neuroscience, 20, 204–214",
    link: "https://doi.org/10.1162/jocn.2008.20017"
    },
    {
    title: "Sensory and association cortex in time perception",
    authors: "D Bueti, B Bahrami, V Walsh",
    year: 2008,
    journal: "Journal of Cognitive Neuroscience, 20, 1054–1062",
    link: "https://doi.org/10.1162/jocn.2008.20060"
    },
    {
    title: "No reversal of the Oppel-Kundt illusion with short stimuli: confutation of the space anisometry interpretation of neglect and ‘cross-over’ in line bisection",
    authors: "F Doricchi, P Guariglia, F Figliozzi, M Silvetti, M Gasparini, S Merola, E Macci, N Binetti, M Bruschini, D Bueti",
    year: 2008,
    journal: "Brain, 131, e94; author reply e95",
    link: "https://doi.org/10.1093/brain/awm273"
    },
    {
    title: "Temporal dynamics of visuo-tactile extinction within and between hemispaces",
    authors: "M Costantini, D Bueti, M Pazzaglia, S.M. Aglioti",
    year: 2007,
    journal: "Neuropsychology, 21, 242–250",
    link: "https://doi.org/10.1037/0894-4105.21.2.242"
    },
    {
    title: "Transcranial magnetic stimulation highlights the sensorimotor side of empathy for pain",
    authors: "A Avenanti, D Bueti, G Galati, S.M. Aglioti",
    year: 2005,
    journal: "Nature Neuroscience, 8, 955–960",
    link: "https://doi.org/10.1038/nn1481"
    },
    {
    title: "Uni- and cross-modal temporal modulation of tactile extinction in right brain damaged patients",
    authors: "D Bueti, M Costantini, B Forster, S.M. Aglioti",
    year: 2004,
    journal: "Neuropsychologia, 42, 1689–1696",
    link: "https://doi.org/10.1016/j.neuropsychologia.2004.04.005"
    }
  // add more publications here...
];