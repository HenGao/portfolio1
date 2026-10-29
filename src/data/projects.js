// Image entries: { src, alt, type?: 'image' | 'video' | 'youtube', fit?: 'cover' | 'contain', caption?, controls?, poster?, bg? }
// fit defaults to 'contain'. Videos autoplay muted on a loop unless `controls` is set.
// The first image is the fixed hero; the rest step through the side panel.

export const projects = [
  {
    id: 'parker',
    link: '/projects/parker',
    name: 'Parker',
    subtitle: 'First-person soldering iron',
    category: 'Hardware',
    status: 'In progress',
    image: '/parker.png',
    cardBg: '#C9CACD',
    images: [
      { src: '/parker.png', caption: 'Industrial design render', alt: 'Parker render: matte black barrel with a blue light ring', fit: 'cover', bg: '#C9CACD' },
      { type: 'video', src: '/parker/operating-demo.mp4', caption: 'Live view from the barrel camera', alt: 'Live view from the barrel camera while soldering', fit: 'cover', bg: '#18181B' },
      { type: 'video', src: '/parker/spin-render.mp4', caption: 'Product turntable', alt: 'Turntable render of Parker', bg: '#C9CACD' }
    ],
    what: [
      'Building <strong>a soldering iron with a camera in the barrel</strong> that looks straight down at the tip, so the joint shows up close, sharp and lit on a <strong>laptop, tablet or VR headset</strong>. No more hunching over a microscope.'
    ],
    how: [
      'Developing a <strong>tip-mounted camera path</strong> so the view stays on the joint without hands or smoke blocking the shot.',
      '<strong>Streaming the tip feed</strong> to a laptop, tablet or VR headset for magnified soldering without a bench microscope.',
      'Designing a <strong>custom long-form PCB</strong> with USB, onboard regulation, buttons, status LEDs and a <strong>wireless module with PCB antenna</strong>.'
    ],
    results: [
      'Product site and <strong>waitlist live</strong> at <a href="https://whitepepper.tools/" target="_blank" rel="noopener noreferrer">whitepepper.tools</a>.',
      'Hardware is still in progress and not shipping yet.'
    ],
    links: [{ label: 'Visit whitepepper.tools', href: 'https://whitepepper.tools/' }],
    electrical: {
      headline: 'Custom long-form PCB',
      text: 'A <strong>White Pepper</strong> board with <strong>USB</strong>, onboard regulation, user buttons, status LEDs and a <strong>wireless module with a PCB antenna</strong>.',
      figures: [
        // { src: '/parker/pcb-top.png', caption: 'White Pepper PCB', alt: 'White Pepper PCB render, top side, with traces hidden', bg: '#F4F4F5', badge: 'Traceless' }
      ],
      wide: true
    },
    tags: ['Embedded camera', 'PCB design', 'Wireless', 'Product design']
  },
  {
    id: 'hydrolet',
    link: '/projects/hydrolet',
    name: 'Hydrolet',
    subtitle: 'Hydration reminder for dementia patients',
    category: 'Hardware',
    status: 'Team project',
    image: '/hydrolet.png',
    images: [
      { src: '/hydrolet.png', caption: 'Band and coaster prototype', alt: 'Hydrolet band and illuminated coaster', fit: 'cover' },
      { type: 'youtube', src: 'https://youtu.be/6PEsWbBr0kc', caption: 'Demo video', alt: 'Hydrolet demo video' },
      { src: '/hydrolet/band.png', caption: 'Wearable band', alt: 'Hydrolet wearable band', bg: '#FFFFFF' },
      { src: '/hydrolet/coaster.png', caption: 'Smart coaster', alt: 'Hydrolet smart coaster', bg: '#FFFFFF' }
    ],
    what: [
      'A <strong>hydration reminder system for dementia patients</strong>: a band that buzzes when it’s time to drink, a smart coaster that measures how much they actually drank, and a caregiver app that keeps family in the loop.'
    ],
    how: [
      'Designed 3D-printed housings for the <strong>band</strong> (Seeed <strong>XIAO nRF</strong>, vibration motor, LED) and the <strong>coaster</strong> (<strong>XIAO ESP32-C3</strong>, LED ring).',
      'Measured cup weight with four <strong>load cells</strong> through an <strong>HX711</strong> amplifier, so the coaster knows when someone drinks.',
      'Wrote <strong>PlatformIO</strong> firmware for both devices over a shared <strong>BLE</strong> protocol, with the coaster pushing data over <strong>Wi-Fi</strong>.',
      'Connected everything to a <strong>React</strong> caregiver app on <strong>Supabase</strong> with push notifications.'
    ],
    results: [
      'A working <strong>end-to-end prototype</strong>: reminders on the band, intake sensing on the coaster and live updates for caregivers.',
      'Hardware, firmware and app all live in one shared repo.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/ConnorFriedman10/Hydrolet' }],
    electrical: {
      headline: 'Two small boards, one protocol',
      text: 'The band runs a <strong>Seeed XIAO nRF</strong> on a 150 mAh battery: D10 drives the vibration motor through a <strong>PN2222A</strong> with a flyback diode, and D2 drives a status LED. The coaster uses a <strong>XIAO ESP32-C3</strong> with an <strong>HX711</strong> load-cell amp on D3/D4 and an LED module on the 5 V rail.',
      figures: [
        { src: '/hydrolet/bracelet-schematic.png', caption: 'Band', alt: 'Band schematic with XIAO nRF, vibration motor driver and status LED', bg: '#FFFFFF' },
        { src: '/hydrolet/coaster-schematic.png', caption: 'Coaster', alt: 'Coaster schematic with XIAO ESP32-C3, HX711 load-cell amplifier and LED module', bg: '#F5F4EF' }
      ]
    },
    tags: ['XIAO nRF', 'ESP32-C3', 'PlatformIO', 'BLE', 'Wi-Fi', 'Load cells', 'React', 'Supabase', '3D printing']
  },
  {
    id: 'helping-hand',
    link: '/projects/helping-hand',
    name: 'Helping Hand',
    subtitle: 'An assistive robotic platform',
    category: 'Hardware',
    status: 'Capstone, 1st place',
    image: '/helping-hand.png',
    cardFit: 'contain',
    cardBg: '#FFFFFF',
    images: [
      { src: '/helping-hand/lab-demo-1.png', caption: 'Testing in the lab', alt: 'Testing Helping Hand from a wheelchair in the lab', fit: 'cover' },
      { src: '/helping-hand/presentation.png', caption: 'Capstone competition', alt: 'Presenting Helping Hand at the capstone competition', fit: 'cover' },
      { type: 'video', src: '/helping-hand/project-overview.mp4', caption: 'Project overview video', poster: '/helping-hand/overview-poster.jpg', alt: 'Helping Hand project overview video', controls: true, bg: '#18181B' },
      { src: '/helping-hand.png', caption: 'Project logo', alt: 'Helping Hand logo', bg: '#FFFFFF' }
    ],
    what: [
      'A <strong>robotic arm that mounts on a manual wheelchair</strong> so people without upper-body strength can reach and grab things, controlled with their <strong>eyes and voice</strong>.'
    ],
    how: [
      'Integrated <strong>eye tracking</strong>, <strong>voice control</strong> and a vision-guided <strong>RoArm-M3-Pro</strong> arm over <strong>ROS 2</strong>.',
      'Built a <strong>finite state machine</strong> for control modes, safety transitions and task flow.',
      'Designed the <strong>wheelchair mount</strong>, harness routing and a <strong>battery and power subsystem</strong> for portable use.'
    ],
    results: [
      '<strong>Won first place</strong> in my semester’s senior capstone design competition.',
      'A working prototype that picks things up from gaze, voice and vision, with each subsystem validated in the final report.'
    ],
    links: [{ label: 'Read the final report (PDF)', href: '/helping-hand/final-report.pdf' }],
    electrical: {
      headline: 'Portable power on the chair',
      text: 'The electrical design ties together the sensor and compute wiring, power for the arm’s drivers, and one battery and distribution setup sized to run everything from the wheelchair.'
    },
    tags: ['ROS 2', 'Python', 'Eye tracking', 'Voice control', 'Computer vision', 'RoArm-M3-Pro', 'Power systems']
  },
  {
    id: 'smart-plug',
    link: '/projects/smart-plug',
    name: 'HUT',
    subtitle: 'Connected living',
    category: 'Hardware',
    status: 'In progress',
    image: '/smart-plug.png',
    cardFit: 'contain',
    cardBg: '#FFFFFF',
    images: [
      { src: '/smart-plug.png', caption: 'Outlet render', alt: 'HUT smart outlet render', bg: '#FFFFFF' },
      { src: '/smart-plug/current-pcb.png', caption: 'Current PCB prototype', alt: 'Assembled HUT PCB prototype' },
      { src: '/smart-plug/layout.png', caption: 'PCB layout', alt: 'HUT PCB layout', bg: '#001023' }
    ],
    what: [
      'An <strong>AI-native smart outlet</strong> that tracks and trims your power use, switches and dims your devices, and uses RUNNA to track your body position. I’m building it as a <strong>startup</strong>.'
    ],
    how: [
      'Measuring power draw with an <strong>ADE7953</strong> energy-metering IC.',
      'Switching loads with a <strong>G5LE-1 relay</strong>, with a <strong>fuse and MOV</strong> protecting the AC side.',
      'Laid out and assembled the <strong>first PCB prototype</strong>.'
    ],
    electrical: {
      headline: 'Metering and switching mains power',
      text: 'The board splits into three blocks: <strong>power sensing</strong>, <strong>relay control</strong> and <strong>AC protection</strong>.',
      figures: [
        { src: '/smart-plug/system-breakdown.png', caption: 'System breakdown', alt: 'HUT system breakdown diagram', bg: '#FFFFFF' },
        { src: '/smart-plug/power-sensing.png', caption: 'ADE7953 power sensing', alt: 'ADE7953 power sensing schematic', bg: '#FFFFFF' },
        { src: '/smart-plug/relay.png', caption: 'G5LE-1 relay control', alt: 'G5LE-1 relay control schematic', bg: '#FFFFFF' },
        { src: '/smart-plug/ac-protection.png', caption: 'Fuse and MOV protection', alt: 'Fuse and MOV AC protection schematic', bg: '#FFFFFF' }
      ]
    },
    tags: ['PCB design', 'Power metering', 'AC power', 'IoT']
  },
  {
    id: 'grover',
    link: '/projects/grover',
    name: 'Growver',
    subtitle: 'Autonomous tree-planting rover',
    category: 'Hardware',
    status: 'Generate, 2026',
    image: '/growver.png',
    images: [
      { src: '/growver/gallery/IMG_6960.jpg', caption: 'Growver in the field', alt: 'Growver rover', fit: 'cover' },
      { type: 'video', src: '/growver/gallery/growver-drive.mp4', caption: 'Driving', alt: 'Growver driving', fit: 'cover' },
      { type: 'video', src: '/growver/gallery/digging.mp4', caption: 'Digging a hole for a sapling', alt: 'Growver digging a hole for a sapling', fit: 'cover' }
    ],
    what: [
      'An <strong>autonomous rover that plants lines of tree saplings</strong>, built by a team of 14 engineers in a three-month cycle.'
    ],
    how: [
      'Led the <strong>battery subsystem</strong> for the rover.',
      'Designed a <strong>BMS PCBA in Altium</strong> with I2C monitoring, <strong>cell balancing</strong>, fault protection and temperature monitoring.',
      'Assembled a custom <strong>24 V Li-ion pack</strong> with spot-welded nickel strip interconnects.',
      'Took the BMS from a first version to a <strong>revised final board</strong>, fabricated through JLCPCB.'
    ],
    results: [
      'Delivered a battery pack and BMS that <strong>catches faults, balances cells and manages overheating</strong>.'
    ],
    electrical: {
      headline: 'Battery pack and BMS',
      text: 'I designed the <strong>BMS in Altium</strong> to monitor the pack over <strong>I2C</strong>, balance cells, catch faults and manage temperature, then revised it into a final board made by <strong>JLCPCB</strong>. It sits on a custom <strong>24 V Li-ion pack</strong>.',
      figures: [
        { src: '/growver/electrical/schematic.png', caption: 'BMS schematic', alt: 'BMS schematic', bg: '#FFFFFF' },
        { src: '/growver/electrical/bmsv2layout.png', caption: 'Final BMS layout', alt: 'Final BMS PCB layout', bg: '#FFFFFF' },
        { src: '/growver/electrical/bmsv2.png', caption: 'Final BMS render', alt: 'Final BMS board render', bg: '#C8C8C8' },
        { src: '/growver/electrical/IMG_1192.jpg', caption: 'Assembled BMS', alt: 'Assembled BMS board', fit: 'cover' }
      ]
    },
    tags: ['Altium', 'Battery management', 'PCB design', 'Power electronics', 'JLCPCB', 'Team leadership']
  },
  {
    id: 'project-two',
    link: '/projects/project-two',
    name: 'Green Tower',
    subtitle: 'Modular indoor hydroponics tower',
    category: 'Hardware',
    status: 'Generate, 2025',
    image: '/green-tower.png',
    images: [
      { src: '/green-tower.png', caption: 'Product render', alt: 'Green Tower render', bg: '#E6E6E6' },
      { src: '/green-tower-4.png', caption: 'At the showcase', alt: 'Henry with the finished Green Tower at the showcase', fit: 'cover' },
      { type: 'video', src: '/green-tower-rotation.mp4', caption: 'Rotating render', alt: 'Green Tower rotating render', bg: '#E6E6E6' },
      { src: '/green-tower-pcb-3d.png', caption: 'Main PCBA', alt: 'Main PCBA 3D render', bg: '#C8C8C8' }
    ],
    what: [
      'A <strong>modular indoor hydroponics tower</strong> that automates watering, nutrients and lighting to make growing at home easier and cheaper. Built with a team of 12 engineers.'
    ],
    how: [
      'An <strong>ESP32</strong> reads <strong>pH, EC, water level and humidity</strong> sensors and controls water dispensing over <strong>SPI, UART and I2C</strong>.',
      'A <strong>main PCBA</strong> powers five sensors, the UV lights, nutrient delivery and motors.',
      'The <strong>3D-printed modular shell</strong> has foldable UV lights, plant pods and pull-out nutrient drawers.'
    ],
    results: [
      'Designed the <strong>pH sensing circuit from scratch</strong>: it reads the sensor’s analog signal, filters it and sends it to the MCU over SPI.',
      'Designed the <strong>motor and LED</strong> schematics and layouts, and tested the boards with an oscilloscope and continuity checks.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/GenerateNU/cedar' }],
    electrical: {
      headline: 'Main PCBA and pH sensing',
      text: 'A main PCBA powers five sensors, the UV lights, nutrient delivery and motors, with an <strong>ESP32</strong> talking over <strong>SPI, UART and I2C</strong>. My <strong>pH sensing circuit</strong> filters the sensor’s analog signal before it reaches the MCU.',
      figures: [
        { src: '/green-tower-ph-schematic.png', caption: 'pH sensing schematic', alt: 'pH sensing circuit schematic', bg: '#FFFFFF' },
        { src: '/green-tower-pcb.png', caption: 'PCB layout', alt: 'Green Tower PCB layout', bg: '#C8C8C8' }
      ]
    },
    tags: ['ESP32', 'Altium', 'PCB design', 'pH sensing', 'SPI', 'I2C', 'UART', '3D printing']
  },
  {
    id: 'project-one',
    link: '/projects/project-one',
    name: 'MIRA Smart Mirror',
    subtitle: 'Self-cleaning mirror that blow-dries your hair',
    category: 'Hardware',
    status: 'Forge, 2025',
    image: '/mira-smart-mirror-2.png',
    cardFit: 'contain',
    cardBg: '#E8E8EA',
    images: [
      { src: '/mira-smart-mirror-2.png', caption: 'The finished mirror at Forge', alt: 'MIRA smart mirror with the Forge logo on its top housing', bg: '#E8E8EA' },
      { type: 'video', src: '/mira-wiping-demo.mp4', caption: 'Self-cleaning wiper', alt: 'MIRA wiper cleaning the mirror', fit: 'cover' },
      { src: '/mira-smart-mirror-1.png', caption: 'Testing with the team', alt: 'The team reflected in the MIRA frame', fit: 'cover' },
      { src: '/mira-smart-mirror-3.png', caption: 'Electronics on the back panel', alt: 'MIRA electronics wired up on the back panel', fit: 'cover' }
    ],
    what: [
      'A <strong>smart bathroom mirror</strong> that defogs and <strong>cleans itself</strong>, <strong>blow-dries your hair</strong>, and shows the weather, time and temperature. I led a team of 6 engineers to build it for the <strong>Forge 2025 Fall Showcase</strong>.'
    ],
    how: [
      'Built the electronics around an <strong>ESP32</strong> that reads sensors over <strong>I2C, SPI and UART</strong> and pulls local conditions from a <strong>weather API</strong>.',
      'Drove a <strong>linear actuator wiper</strong> with stepper drivers, switched the defog fans with <strong>relays</strong>, and regulated power with buck converters.',
      'Shaped the hair-drying air channel with <strong>SOLIDWORKS Flow Simulation</strong>.'
    ],
    results: [
      'A working mirror that <strong>cleans itself, dries hair and shows live local data</strong>.',
      'Pitched at the Forge 2025 Fall Showcase to positive feedback from judges and attendees.'
    ],
    links: [{ label: 'Download firmware', href: '/firmware/mirafirmware.ino', download: 'mirafirmware.ino' }],
    electrical: {
      headline: 'One ESP32 runs everything',
      text: 'An <strong>ESP32</strong> coordinates the whole mirror: <strong>relays</strong> switch the defog fans, <strong>stepper drivers</strong> move the wiper, <strong>buck converters</strong> regulate power, and <strong>I2C</strong> sensors track temperature and humidity.',
      figures: [
        { src: '/mira-schematic.png', caption: 'Electrical schematic', alt: 'MIRA electrical schematic', bg: '#FFFFFF' }
      ]
    },
    tags: ['ESP32', 'C++', 'Linear actuator', 'Stepper motors', 'Relays', 'Buck converters', 'SOLIDWORKS', '3D printing']
  },
  {
    id: 'project-three',
    link: '/projects/project-three',
    name: 'Optimus',
    subtitle: 'Cable reliability test robot for Philips',
    category: 'Hardware',
    status: 'Philips co-op, 2024',
    image: '/optimus-hero-shot.png',
    images: [
      { src: '/optimus-hero-shot.png', caption: 'Optimus test rig', alt: 'Optimus test robot with force readout and emergency stop', fit: 'cover' },
      { src: '/optimus-mechanical.png', caption: 'Mechanical design', alt: 'Optimus mechanical design' },
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=V9r8V0G7k2I', caption: 'User guide I made', alt: 'Optimus user guide video' }
    ],
    what: [
      'A <strong>reliability test robot</strong> I designed during my <strong>Philips co-op</strong>. It mates and unmates ECG and SpO2 cables tens of thousands of times to prove new products hold up.'
    ],
    how: [
      'Wrote the whole software stack in <strong>LabVIEW</strong>, including my own <strong>motor driver and UI</strong>.',
      'Designed the mechanics in <strong>SOLIDWORKS</strong> and made the parts on Philips’ in-house <strong>CNC</strong> and 3D printers.',
      'An <strong>Arduino R4</strong> reads the sensors and syncs the rotational and linear motion.'
    ],
    results: [
      'Ran <strong>35,000 test cycles</strong> while recording force values.',
      'Made the <strong>user guide video</strong> above so other engineers can run it.'
    ],
    electrical: {
      headline: 'LabVIEW in the loop',
      text: 'Sensor data goes to a computer running <strong>LabVIEW</strong>, which processes it and sends commands to an <strong>Arduino</strong> that turns them into linear and rotational motion.',
      figures: [
        { src: '/optimus-electrical-diagram.png', caption: 'Electrical diagram', alt: 'Optimus electrical diagram', bg: '#FFFFFF' }
      ]
    },
    tags: ['LabVIEW', 'Arduino', 'SOLIDWORKS', 'CNC', 'Linear slide', 'Strain gauge', '3D printing']
  },
  {
    id: 'fpga-ar',
    link: '/projects/fpga-ar',
    name: 'FPGA AR',
    subtitle: 'Augmented reality on a Zynq FPGA',
    category: 'FPGA',
    status: 'Class project',
    image: '/fpga-ar/cube-anchor.jpg',
    images: [
      { src: '/fpga-ar/cube-anchor.jpg', caption: 'Cube anchored to the drawn circle', alt: 'Rendered 3D cube anchored to a circle drawn on paper', fit: 'cover' },
      { type: 'video', src: '/fpga-ar/cube-demo.mp4', caption: 'AR output video', alt: 'AR output video with the cube tracking the circle', bg: '#18181B' },
      { src: '/fpga-ar/cube-top.jpg', caption: 'Top-down view', alt: 'Top-down view of the rendered cube over the circle', fit: 'cover' },
      { src: '/fpga-ar/filter-results.png', caption: 'Input, blur and edge detection', alt: 'Input frame, blurred frame and edge-detected frame side by side', bg: '#FFFDF9' }
    ],
    what: [
      'Evan and I wanted to see what an FPGA’s low latency and parallelism could do for <strong>augmented reality</strong>. Draw a circle on paper, film it, and the system places a <strong>3D cube</strong> on top of it in the video.'
    ],
    how: [
      'Wrote a 5×5 <strong>Gaussian blur</strong> and a 3×3 <strong>edge detection</strong> kernel in C++ with <strong>HLS</strong>, then wired both into a <strong>Zynq UltraScale+</strong> block design in <strong>Vivado</strong>.',
      'Chopped the video into frames and streamed them through the hardware over <strong>DMA</strong> from a Jupyter notebook on the board.',
      'Used <strong>OpenCV</strong> to find the circle, work out the camera angle and distance from its known size, and draw the cube onto each frame.'
    ],
    results: [
      'Got the <strong>full loop working</strong>: video in, blur and edge detection in hardware, AR video out with the cube anchored to the circle.',
      'Switching from AXI4 to <strong>AXI Stream</strong> made the pipeline <strong>about 8× faster</strong> (24.6 ms down to 3.1 ms) for roughly a third more area.',
      'Checked both kernels against testbenches (impulse, checkerboard, gradient and half-black images) before eyeballing the final video.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/evan-il/eece4632' }],
    electrical: {
      label: 'Hardware',
      headline: 'Zynq block design',
      text: 'The blur and edge detection cores sit next to the <strong>Zynq UltraScale+</strong> processor, with an <strong>AXI DMA</strong> moving frames between memory and the pipeline.',
      figures: [
        { src: '/fpga-ar/block-design.jpg', caption: 'Vivado block design', alt: 'Vivado block design with Zynq UltraScale+, DMA, blur and edge detection IP', bg: '#FFFFFF' }
      ]
    },
    tags: ['Zynq UltraScale+', 'Vivado', 'HLS', 'C++', 'AXI Stream', 'DMA', 'Python', 'OpenCV']
  },
  {
    id: 'kalshi-bot',
    link: '/projects/kalshi-bot',
    name: 'Kalshi bot',
    subtitle: 'ML trading bot for Bitcoin prediction markets',
    category: 'Software',
    status: 'Personal',
    image: '/kalshi-bot.png',
    cardFit: 'contain',
    cardBg: '#0B0B0D',
    images: [
      { src: '/kalshi-bot.png', caption: 'A 15-minute BTC market on Kalshi', alt: 'Kalshi 15-minute BTC market the bot trades', bg: '#0B0B0D' }
    ],
    what: [
      'An <strong>end-to-end Python trading bot</strong> for Kalshi’s Bitcoin markets that only trades when the <strong>expected value</strong> clears the spread, fees and a confidence threshold.'
    ],
    how: [
      'Trades <strong>15-minute, hourly and daily</strong> BTC contracts in one loop, with automatic market discovery and IOC orders.',
      'Prices each contract with <strong>logistic regression and gradient boosting</strong> models fed by Coinbase candles and Kalshi order book data.',
      'Guards against blowups with <strong>stop-losses</strong>, a <strong>drawdown kill switch</strong> and per-market state recovery.',
      'Logs live metrics to JSONL, with a dashboard and offline evaluation scripts to test changes before deploying.'
    ],
    results: [
      'Made <strong>+$12 in one day</strong> of paper trading with every risk filter switched on.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/HenGao/kalshibot' }],
    tags: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Flask', 'Kalshi API', 'Algorithmic trading']
  },
  {
    id: 'project-four',
    link: '/projects/project-four',
    name: 'Cleanboil Thermos',
    subtitle: 'Battery-powered thermos that boils water',
    category: 'Hardware',
    status: 'Forge, 2024',
    image: '/cleanboil-thermos.png',
    cardFit: 'contain',
    images: [
      { src: '/cleanboil-thermos.png', caption: 'Cleanboil thermos', alt: 'Cleanboil thermos' },
      { src: '/cleanboil-mechanical.png', caption: 'Mechanical design', alt: 'Cleanboil mechanical design' }
    ],
    what: [
      'A <strong>thermos that boils its own water</strong>, so you get clean hot water while hiking or camping. Built with a team of 5 for the <strong>Forge 2024 Spring Showcase</strong>.'
    ],
    how: [
      '<strong>Silicone heaters</strong> wrapped around a metal inlay bring the water to a boil inside a <strong>3D-printed shell</strong>.',
      'An <strong>ESP32</strong> handles the button, the heating timer and a <strong>relay</strong> that switches power between the controller and the heaters.',
      'A <strong>two-battery setup</strong> covers the ESP32’s 5 V and the heaters’ 12–24 V.',
      'Designed in <strong>Onshape</strong>, with a hinge that routes cables into a hollow cap holding the electronics.'
    ],
    links: [{ label: 'Download firmware', href: '/firmware/cleanboil.ino', download: 'cleanboil.ino' }],
    electrical: {
      headline: 'One relay, two jobs',
      text: 'Power and space were tight, so a <strong>relay</strong> switches between running the <strong>ESP32</strong> and the <strong>silicone heaters</strong>. Pressing the button flips the relay and lights the top LED, and once the boil time has passed it flips back on its own.',
      figures: [
        { src: '/cleanboil-schematic.png', caption: 'Schematic', alt: 'Cleanboil schematic', bg: '#FFFFFF' }
      ]
    },
    tags: ['ESP32', 'Silicone heaters', 'Relays', 'Onshape', '3D printing']
  },
  {
    id: 'project-seven',
    link: '/projects/project-seven',
    name: 'MP3 Player',
    subtitle: 'Rechargeable DIY music player',
    category: 'Hardware',
    status: 'Personal',
    image: '/mp3-player-hero.png',
    images: [
      { src: '/mp3-player-hero.png', caption: 'PCB render', alt: 'MP3 player PCB render with battery holder and buttons', fit: 'cover' },
      { src: '/mp3-player-1.png', caption: 'Build', alt: 'MP3 player build' },
      { src: '/mp3-player-2.png', caption: 'Build, second view', alt: 'MP3 player build, second view' }
    ],
    what: [
      'A <strong>DIY MP3 player</strong> I built to cut back on Spotify without paying for an off-the-shelf player.'
    ],
    how: [
      'Plays music from a <strong>DFR0299 MP3 module</strong> through a <strong>3.5 mm jack</strong>, with DC-blocking capacitors on the audio lines.',
      'Charges a <strong>single-cell Li-ion battery</strong> through a <strong>TP4056</strong> charger.',
      'Controlled with a power switch and <strong>two push buttons</strong>.'
    ],
    electrical: {
      headline: 'Simple, rechargeable audio',
      text: 'A <strong>DFR0299</strong> MP3 module plays through a 3.5 mm jack with DC-blocking capacitors on the audio lines. A <strong>TP4056</strong> charges the single-cell battery, and an SPDT switch plus two push buttons handle control.',
      figures: [
        { src: '/mp3-player-schematic.png', caption: 'Schematic', alt: 'MP3 player schematic', bg: '#FFFFFF' }
      ]
    },
    tags: ['DFR0299', 'TP4056', 'Li-ion battery', 'PCB design', 'Audio']
  },
  {
    id: 'project-five',
    link: '/projects/project-five',
    name: '3-Axis Laser Turret',
    subtitle: 'Mouse-controlled laser turret',
    category: 'Hardware',
    status: 'High school',
    image: '/laser-turret-hero.png',
    images: [
      { src: '/laser-turret-hero.png', caption: 'Laser turret', alt: 'Laser turret', fit: 'cover' },
      { type: 'youtube', src: 'https://www.youtube.com/shorts/WHCuafffNu8', caption: 'Demo video', alt: 'Laser turret demo video', bg: '#18181B' }
    ],
    what: [
      'A <strong>laser turret that follows your mouse</strong>, built on my own in high school to learn how electronics work.'
    ],
    how: [
      'Two <strong>servos</strong> aim a <strong>laser diode</strong>, driven by an <strong>Arduino</strong>.',
      'Wrote a <strong>WinForms</strong> app that turns mouse movement into servo angles.',
      'Gave each servo its own power supply.'
    ],
    electrical: {
      headline: 'Mouse in, angles out',
      text: 'An <strong>Arduino</strong> drives two servos and a laser diode. My script converts the mouse’s movement into servo angles, and each servo gets its own power supply.',
      figures: [
        { src: '/laser-turret-schematic.png', caption: 'Schematic', alt: 'Laser turret schematic', bg: '#FFFFFF' }
      ]
    },
    tags: ['Arduino', 'Servo motors', 'Laser diode', 'WinForms']
  },
  {
    id: 'project-six',
    link: '/projects/project-six',
    name: 'Automated Hydroponic System',
    subtitle: 'Timer-driven home hydroponics',
    category: 'Hardware',
    status: 'High school',
    image: '/automated-hydroponics-hero.png',
    images: [
      { src: '/automated-hydroponics-hero.png', caption: 'Hydroponic setup', alt: 'Automated hydroponic system' }
    ],
    what: [
      'A small <strong>automated hydroponics setup</strong> I built in high school to learn about hydroponics and grow food for my family.'
    ],
    how: [
      'A <strong>Kasa smart plug</strong> powers the whole system on a daily schedule.',
      'When it turns on, an <strong>Arduino</strong> runs the feeding <strong>servo</strong>, and the <strong>water pump</strong> and <strong>UV lights</strong> come on.',
      'When the cycle ends, everything shuts off.'
    ],
    electrical: {
      headline: 'Everything on one timer',
      text: 'Everything runs off a <strong>Kasa smart plug</strong> on a daily schedule. When it turns on, the <strong>Arduino</strong> starts the feeding servo while the pump and UV lights power up. When the cycle ends, it all shuts off.',
      figures: [
        { src: '/automated-hydroponics-schematic.png', caption: 'Wiring diagram', alt: 'Hydroponic system wiring diagram', bg: '#FFFFFF' }
      ]
    },
    tags: ['Arduino', 'Servo motors', 'Kasa smart plug', 'UV lighting']
  },
  {
    id: 'project-eight',
    link: '/projects/project-eight',
    name: 'ECG Signal Processing',
    subtitle: 'Filter circuit that amplifies heartbeat signals',
    category: 'Hardware',
    status: 'Class project',
    image: '/ecg-schematic.png',
    cardFit: 'contain',
    cardBg: '#FFFFFF',
    images: [
      { src: '/ecg-breadboard.png', caption: 'Breadboard build', alt: 'ECG circuit built on a breadboard', fit: 'cover' }
    ],
    what: [
      'An <strong>ECG front end</strong> that picks up and amplifies heartbeat signals, built for my Circuits and Signals for Biomedical Applications class.'
    ],
    how: [
      'Amplifies the tiny electrode signal with an <strong>AD627 instrumentation amplifier</strong>.',
      'Cleans it up with <strong>high-pass and low-pass op-amp filters</strong>.'
    ],
    electrical: {
      headline: 'Amplify, then filter',
      text: 'A heartbeat at the electrodes is a tiny signal, so an <strong>AD627</strong> amplifies it and <strong>high-pass and low-pass op-amp filters</strong> clean out the noise.',
      figures: [
        { src: '/ecg-schematic.png', caption: 'Amplifier and filter schematic', alt: 'ECG amplifier and filter schematic', bg: '#FFFFFF' },
        { src: '/ecg-circuit-diagram.png', caption: 'Circuit diagram', alt: 'ECG circuit diagram', bg: '#FFFFFF' }
      ]
    },
    tags: ['AD627', 'Op-amp filters', 'ECG electrodes', 'Analog design']
  },
  {
    id: 'project-nine',
    link: '/projects/project-nine',
    name: 'OR Gate',
    subtitle: 'OR gate built from CMOS transistors',
    category: 'Hardware',
    status: 'Class project',
    image: '/or-gate-hero.png',
    images: [
      { src: '/or-gate-hero.png', caption: 'Breadboard build', alt: 'CMOS OR gate wired on a breadboard', fit: 'cover' }
    ],
    what: [
      'An <strong>OR gate built from CMOS transistors</strong> for my Fundamentals of Electronics course.'
    ],
    how: [
      'Used MOSFETs as switches to build a <strong>NOR gate</strong>.',
      'Chained NOR gates together to get an <strong>OR</strong>.'
    ],
    electrical: {
      headline: 'OR from NOR',
      text: '<strong>MOSFETs</strong> act as switches to form a <strong>NOR gate</strong>, and NOR gates combine into an OR. Any logic gate can be built from NORs.',
      figures: [
        { src: '/or-gate-circuit.png', caption: 'Circuit diagram', alt: 'CMOS OR gate circuit diagram', bg: '#FFFFFF' }
      ]
    },
    tags: ['CMOS', 'MOSFETs', 'Digital logic']
  },
  {
    id: 'project-ten',
    link: '/projects/project-ten',
    name: 'Power Cone',
    subtitle: 'Remote-controlled color-changing soccer cone',
    category: 'Hardware',
    status: 'Client project',
    image: '/powercone/assembled.png',
    cardFit: 'contain',
    cardBg: '#E3E5EC',
    images: [
      { src: '/powercone/section.png', caption: 'Cross-section: battery, RF board and LED', alt: 'Cross-section of the cone showing battery, RF board and LED under the dome', bg: '#E3E5EC' },
      { src: '/powercone/internal.png', caption: 'Internal layout', alt: 'Cone with the shell cut away showing battery and electronics', bg: '#E3E5EC' },
      { src: '/powercone/assembled.png', caption: 'Assembled cone', alt: 'Assembled orange cone with clear dome', bg: '#E3E5EC' }
    ],
    what: [
      'A Fiverr client in Finland wanted a <strong>soccer cone that changes color by remote</strong> from 20 meters away and keeps working through <strong>Finnish winters</strong>.'
    ],
    how: [
      'Designed the cone enclosure, dome and internal layout in <strong>CAD</strong>.',
      'Specified an <strong>ESP32</strong>, a <strong>433 MHz RF</strong> link and a <strong>10 W multicolor LED</strong>.',
      'Sized a <strong>3000 mAh Li-Po</strong> for up to <strong>15 hours</strong> of play below freezing.'
    ],
    electrical: {
      headline: '15 hours of light below freezing',
      text: 'An <strong>ESP32</strong> takes commands over a <strong>433 MHz RF</strong> link and drives a <strong>10 W multicolor LED</strong>. A <strong>3000 mAh Li-Po</strong> gives up to 15 hours of play in sub-zero weather.'
    },
    tags: ['ESP32', '433 MHz RF', 'Li-Po power', 'CAD']
  },
  {
    id: 'project-eleven',
    link: '/projects/project-eleven',
    name: 'Guinea Pig Transformation',
    subtitle: 'Button that plays random voice clips',
    category: 'Hardware',
    status: 'Personal',
    image: '/guinea-pig-transformation.png',
    images: [
      { src: '/guinea-pig-transformation.png', caption: 'The finished gift', alt: 'Guinea pig voice-clip gift', bg: '#18181B' }
    ],
    what: [
      'A gift for my girlfriend’s 20th birthday: press the button and a <strong>DFPlayer Mini</strong> plays a <strong>random voice clip</strong>.'
    ],
    tags: ['DFPlayer Mini', 'Audio']
  },
  {
    id: 'runna-stick',
    link: '/projects/runna-stick',
    name: 'Runna Stick',
    subtitle: 'Smart running wearable for Strava',
    category: 'Hardware',
    status: 'In progress',
    image: '/runna-stick.png',
    cardFit: 'contain',
    cardBg: '#FFFFFF',
    images: [
      { src: '/runna-stick.png', caption: 'Runna Stick render', alt: 'Runna Stick render', bg: '#FFFFFF' }
    ],
    what: [
      'A <strong>smart running wearable</strong> that makes Strava more social: it tracks <strong>hydration from your sweat</strong>, logs your run stats, corrects your <strong>form with haptics</strong>, and lets you <strong>friend someone on Strava by tapping sticks</strong>.'
    ],
    how: [
      'Designing the main board around an <strong>nRF52840</strong> MCU.'
    ],
    electrical: {
      headline: 'nRF52840 main board',
      text: 'The main board is built around an <strong>nRF52840</strong> Bluetooth MCU.',
      figures: [
        { src: '/runna-stick/mcu-design.png', caption: 'MCU schematic', alt: 'nRF52840 MCU schematic', bg: '#FFFFFF' }
      ]
    },
    tags: ['nRF52840', 'PCB design', 'Haptics', 'Wearables']
  },
  {
    id: 'okclaw',
    link: '/projects/okclaw',
    name: 'OkClaw',
    subtitle: 'Dating network for AI agents',
    category: 'Software',
    status: 'In progress',
    image: '/okclaw.png',
    cardFit: 'contain',
    cardBg: '#FFFFFF',
    images: [
      { src: '/okclaw.png', caption: 'OkClaw app', alt: 'OkClaw app', bg: '#FFFFFF' }
    ],
    what: [
      'A <strong>dating network for AI agents</strong>: agents make profiles, find each other and go on live “dates” with no humans involved. MoltBook got me thinking that <strong>AI-to-AI social networks</strong> are the next step.'
    ],
    how: [
      'Built the frontend in <strong>Next.js 16, React 19, TypeScript and Tailwind</strong>, with a shared model for agents, matches, signals and compatibility.',
      'Made a <strong>Live Date</strong> view with a timed transcript, signal and compatibility panels, and a verdict at the end.',
      'Added Discover, profile, matches and history pages running on mock data.',
      'Planned the backend on <strong>Supabase</strong> (Postgres, auth, realtime, RLS) with hosting on <strong>Vercel</strong>.'
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/HenGao/OkClaw' }],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel']
  }
]

export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}
