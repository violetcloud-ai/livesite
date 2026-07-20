// ==========================================================================
// MASTER BLOG POSTS DATABASE (810px wide on blog.html)
// ==========================================================================
const ALL_BLOG_POSTS = [
    {
        date: "July 20, 2026",
        title: "Blog 8 - Announcements",
        content: `
            <p>Hello everyone, it's been awhile! A few housekeeping announcements to make here:</p>
            
            <p><strong><u>New domain and social media handle</u></strong>
            
            <p>AI has changed dramatically over the years, and we feel that Violet Cloud is no longer in that same space. We are therefore changing our URL domain from <span style="color: #b91c1c; font-weight: 400;"><s>violetcloud.ai</s></span> to <span style="color: #813F9B; font-weight: 600;">violetcloud.app</span> to reflect this shift in our direction and identity.</p>
  
            <p>Our YouTube handle has also been updated to <a href="https://www.youtube.com/@violetcloudapp">@violetcloudapp</a> accordingly.<p>

            <p><strong><u>New project</u></strong>

            <p>We have a new project in the works! It is somewhat of a continuation of the project from the last blog, except it will be more refined. Also, it will be web-based. We are excited to share more of this in the coming months. Stay tuned!</p>
        `,
        tags: ["announcements"]
    },
    {
        date: "Dec 20, 2020",
        title: "Blog 7 - Structural Analysis - Pygame",
        content: `
            <!-- Responsive YouTube Wrapper Frame -->
            <div class="video-container">
                <iframe src="https://youtu.be/OmvPcJmPbwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox="allow-scripts allow-same-origin allow-presentation" allowfullscreen></iframe>
            </div>

            <p>I created a stand-alone structural analysis program using Pygame (Orion.exe). I imported the structural analysis component of the artificial intelligence (AI) from Dynamo in my previous blogs into Pygame, which I'm calling Orion.exe.</p>
            
            <p>I hope to import all of the AI that I have accumulated Dynamo in due time (i.e., from my previous videos). The future verions of Orion.exe will include more user interaction options, such as changing the loads of the floors, the member sizes, etc.</p>
  
            <p>The goal is to analyze, design, model and draw the structure in less than 5% of the time you spend on inputing the data, thus significantly reducing the time (and cost) in the more tedious and straightforward parts of engineering. There will be an option in the future to output the data into files such as .txt or .xlsx, which can be connected to other engineering and modeling software.<p>

            <p>In the meantime, please <a href="contact.html">contact me</a> if you are interested in Orion, or if you would like me to develop custom programs and AI for you in Structural  Engineering, BIM Modelling, Engineering Drawings and Dynamo. I can customise the ai to suit your business needs.</p>

            <img src="assets/img/blog/blog07_1.png">

            <p><strong>Download Orion (Demo for Beta v1.0) as a zip file <a href="downloads/blog07_orion_v01.zip">here</a> (9.41 MB).</strong></p>

            <p><u>Commands in Orion</u></p>
            <ul>
                <li>Keyboard "Ctrl" + Mouse Buttons = Manipulate view (Left = Rotation, Middle = Zoom, Right = Steering)</li>
                <li>Keyboard "Shift" + Mouse Buttons = Floor and beam generation on selected floor (Left click between nodes)</li>
                <li>Keyboard "Alt" + Mouse Buttons = Manipulate Floor (White, Red, Blue or Green, refer to Blog 7 for examples)</li>
                <li>Keyboard "Up" or "Down" = Change selected floors</li>
                <li>Keyboard "A" = Automate structure based on generated floors</li>
                <li>Keyboard "R" = Analysis view</li>
                <li>Keyboard "F" = Floor view</li>
                <li>Keyboard "V" = Model view</li>
                <li>Keyboard "Spacebar" = Manipulate grid sizes and number of floors</li>
                <li>Keyboard "M" = Make new grid</li>
            </ul>

            <p>Demo version does not include structural analysis.</p>
        `,
        tags: ["structural analysis", "Pygame", "download"]
    },
    {
        date: "Dec 01, 2020",
        title: "Blog 6 - Structural Analysis + Humanoid Skeleton",
        content: `
            <!-- Responsive YouTube Wrapper Frame -->
            <div class="video-container">
                <iframe src="https://youtu.be/oG2ZiJDRQjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox="allow-scripts allow-same-origin allow-presentation" allowfullscreen></iframe>
            </div>

            <p>This video presents the structural analysis of a humanoid skeleton model and how structural analysis can be applied to any generic shape, such as a humanoid skeleton (or robots, vehicles, etc.).</p>
            
            <p>The weight of the humanoid is attached to the joints of the skeletons, applying a nodal force at the joints in the gravity direction. Ratio of the body weight is distributed to the body parts accordingly. Torque (bending moment) in this model is therefore generated due to the weight of the humanoid (i.e., no externally applied forces). Various skeleton positions, such as standing, sitting and walking, are analysed using this technique. The torques induced in these models are shown in the video.</p>
            
            <p>The inspiration came from my own daily experience of backpain, especially near the lower portion of the spine. I suspected that it was because I don't normally sit in a proper upright position. A huge amount of stress is induced in the lower spine, and it is surprising that there is no good way to mitigate this except to sit in a proper upright position with a good backrest. The methods used in this video could be ideal for customising a chair.</p>
  
            <p>Please <a href="contact.html">contact me</a> if you would like me to develop programs and AI for you in Structural Engineering, BIM Modelling, Engineering Drawings and Dynamo. I can customise the ai to suit your business needs.<p>

            <img src="assets/img/blog/blog06_1.png">
        `,
        tags: ["structural analysis", "robotics"]
    },
    {
        date: "Nov 26, 2020",
        title: "Blog 5 - Structural Engineering Automation (Analysis, Design, and BIM)",
        content: `
            <!-- Responsive YouTube Wrapper Frame -->
            <div class="video-container">
                <iframe src="https://youtu.be/INrVD__wh-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox="allow-scripts allow-same-origin allow-presentation" allowfullscreen></iframe>
            </div>

            <p>This video presents the automation of structural engineering using artificial intelligence (AI). The AI demonstrates its capability in designing a structure with both Reinforced Concrete (RC) and Steel, and it can automatically recognise transfer beams in the structure and whether it is necessary to use pile foundations based on the ground conditions. The entire process of analysis and design is automated by the AI.</p>
            
            <p>By using an AI for engineering work, you can drastically reduce cost and enable consistency in analysis, design, modelling, drafting and tracking of revisions. All of the information is retained, thus enabling a comprehensive method for BIM. In this video, I have demonstrated that all of this is possible in one program (i.e., Dynamo).</p>
            
            <p>From a set of floor geometry inputs (i.e., size, location, floor and loads), the AI automatically generates the structural framing for the building, and automatically shifts the beams and columns away from the building edges. Sizing of the structure is determined based on the height restrictions of each floor.</p>
            
            <p>Structural analysis is carried out as a space frame analysis, and the internal forces are used to automatically design the members.</p>

            <p>For RC structures, steel reinforcements are automatically designed for the members.</p>
            
            <p>For Steel structures, member end connections are automatically assigned as plastic hinges to reflect the beam-end connections for steel structures. Steel bracing is added to the structure.</p>

            <p>Wind analysis is carried out by calculating the building area exposed to wind load, and a rigid diaphragm is automatically assigned to each floor.</p>

            <p>Please <a href="contact.html">contact me</a> if you would like me to develop programs and AI for you in Structural Engineering, BIM Modelling, Engineering Drawings and Dynamo. I can customise the AI to suit your business needs.<p>

            <img src="assets/img/blog/blog05_1.png">
        `,
        tags: ["automation", "structural analysis", "steel"]
    },
    {
        date: "Nov 02, 2020",
        title: "Blog 4 - Tutorial for Structural Analysis, Matrix Inverse, Dynamo Drawings",
        content: `
            <!-- Responsive YouTube Wrapper Frame -->
            <div class="video-container">
                <iframe src="https://youtu.be/Y9l5-zt761w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox="allow-scripts allow-same-origin allow-presentation" allowfullscreen></iframe>
            </div>

            <p class="br-bottom">This video presents the following Python codes:</p>
            <ol>
                <li>Structural Analysis</li>
                <li>Matrix Inverse (LU Decomposition & Gaussian Elimination)</li>
                <li>Dynamo Drawings</li>
            </ol>
            
            <p>Matrix Inverse code in Python is provided in Dynamo and verified with worked examples and online calculator. The code can be executed in dynamo independent of other programs. Works for any NxN matrix for the purpose of structural analysis (no zeroes in diagonals), given that the matrix is invertible and your computer memory is sufficient.</p>
            
            <p class="br-bottom">Structural analysis code tutorial is presented in this video with verified results from worked examples. The architecture of the code is as follows:</p>
            <ol type="a">
                <li>Collect geometric data from Joints and Members</li>
                <li>Formulate global stiffness matrix and global force vector</li>
                <li>Calculate the global deformations (using the matrix inverse code)</li>
                <li>Calculate the local forces and bending moments</li>
                <li>Convert local forces to joint reactions</li>
                <li>Draw the graphical interpretation of the numerical data in Dynamo</li>
            </ol>

            <p>The Dynamo drawing code itself does not require Revit, but to generate the graphical results as lines in Dynamo, you need a Revit program.</p>

            <p class="br-bottom"><u>Referenced sources:</u></p>
            <ul>
                <li>Matrix Inverse (LU Decomposition) example from: <a href="http://home.cc.umanitoba.ca/~farhadi/Math2120/LU%20Decomposition.pdf">http://home.cc.umanitoba.ca/~farhadi/Math2120/LU%20Decomposition.pdf</a></li>
                <li>Matrix Inverse online calculator: <a href="https://matrix.reshish.com/inverse.php">https://matrix.reshish.com/inverse.php</a></li>
                <li>Structural Analysis examples: <a href="https://www.erbakan.edu.tr/storage/files/department/insaatmuhendisligi/editor/DersSayfalari/YapSt2/07_Matrix_Frame.pdf">https://www.erbakan.edu.tr/storage/files/department/insaatmuhendisligi/editor/DersSayfalari/YapSt2/07_Matrix_Frame.pdf</a></li>
            </ul>
            
            <p><strong>Download the Dynamo code <a href="downloads/blog04.dyn" target="_blank" rel="noopener">here</a> (185 KB).</strong></p>

            <img src="assets/img/blog/blog04_1.png">
        `,
        tags: ["Python", "Dynamo", "structural analysis", "matrix", "download"]
    },
    {
        date: "Oct 04, 2020",
        title: "Blog 3 - Artificial Intelligence + Dynamo (Floor Plan similar to HKIE 2016 Q4)",
        content: `
            <!-- Responsive YouTube Wrapper Frame -->
            <div class="video-container">
                <iframe src="https://youtu.be/LgWnJ4tlfeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox="allow-scripts allow-same-origin allow-presentation" allowfullscreen></iframe>
            </div>

            <p>This video shows the Artificial Intelligence (AI) generating the structural model for a floor plan similar to Hong Kong Institution of Engineers (HKIE) Structural Exam 2016 Question #4. The input is simply the floor plan layout, min. column spacing, no-column zones, openings and floor height restrictions.</p>
            
            <p>Based on this information, the AI is able to generate the structural framing (column grid), while automatically calculating the foundation, structural member sizes and connection details (bolts and welds). Structural steel is used as the primary construction material.</p>
            
            <img src="assets/img/blog/blog03_1.png">
            <img src="assets/img/blog/blog03_2.png">
            
            <p>Download the demo project files (Demo Project v1.2) as a zip file <a href="downloads/blog03.zip" target="_blank" rel="noopener">here</a> (18.4 MB).</p>
            
            <p><u>Zip file contents</u></p>
            <table class="blog-data-table">
                <thead>
                    <tr>
                        <th>File</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Demo Project (Data) v1.2.xlsx</td>
                        <td>The data file generated by the AI</td>
                    </tr>
                    <tr>
                        <td>Demo Project (Dynamo) v1.2.dyn</td>
                        <td>Dynamo file to visualize the data output</td>
                    </tr>
                </tbody>
            </table>

            <p><u>Specifications</u></p>
            
            <div class="spec-section">
                <p><strong>[The building]</strong></p>
                <p>Based on Question #4 of the Structural Exam 2016 from the Hong Kong Institution of Engineers</p>
                <ul>
                    <li>Structural Steel Scheme</li>
                    <li>7 Storeys</li>
                    <li>Foundation at G/F</li>
                </ul>
            </div>

            <div class="spec-section" style="margin-top: 15px;">
                <p class="br-bottom"><strong>[The processing]</strong></p>
                <ul>
                    <li>Computer specifications: Intel® Core™ i7-8750H with 16 GB Memory</li>
                    <li>Data generation speed from demo input: 5 min</li>
                    <li>3D model render speed without steel reinf. from data: 5 min</li>
                    <li>3D model render speed with steel reinf. from data: 15 min</li>
                </ul>
            </div>

            <p class="br-bottom"><u>How to operate the Dynamo file</u></p>
            <ol>
                <li>Select "Demo Project (Data) v1.2" Excel File</li>
                <li>Click Run</li>
            </ol>

            <img src="assets/img/blog/blog03_3.png">
        `,
        tags: ["HKIE", "Dynamo", "high-rise", "download"]
    },
    {
        date: "Sep 20, 2020",
        title: "Blog 2 - Artificial Intelligence + Dynamo (Residential Building)",
        content: `
            <!-- Responsive YouTube Wrapper Frame -->
            <div class="video-container">
                <iframe src="https://youtu.be/kPL7RluPrLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox="allow-scripts allow-same-origin allow-presentation" allowfullscreen></iframe>
            </div>

            <p>This video demonstrates the ability of Artificial Intelligence (AI) in generating residential-type structures. The AI adopts a "Wall-Beam" configuration without internal columns, where the core walls are used as the only vertical elements within the building boundary; otherwise, selected locations at the building edges are used as structural walls. In the video, Red, Purple and Blue areas allows for the use of structural walls. Green areas are balconies using cantilever structures as support.</p>
            
            <p>In the video, the steel reinforcement for all structural elements are modeled by the AI. This includes the pile caps, walls, columns, beams and slabs. UBP steel piles are chosen for the foundation, appropriate for the loading in this demonstration.</p>
            
            <p>The entire structure is calculated by the AI in less than 5 minutes, which includes the development of the structural framing from the floor plan, the sizing of the structural elements, the foundation design and the reinforced concrete design.</p>
            
            <p>For developers and contractors, the AI can easily obtain the material quantity for cost estimation. This is a very powerful tool to have for initial development of the design, especially if engineers need to quickly adapt to changes in the floor plan.</p>

            <p>This video is proof that the AI technology does indeed enable engineers (like myself) to design the structure holistically, from concept to analysis to design. All of the information is managed by the AI algorithm, therefore mistakes and biases are minimised as long as the AI is taught the proper engineering principles.</p>
            
            <p>This demo project showcases a building with 8 levels, with the foundation at G/F and 2 core walls.</p>

            <img src="assets/img/blog/blog02_1.png">
        `,
        tags: ["residential", "apartment", "high-rise"]
    },
    {
        date: "Sep 06, 2020",
        title: "Blog 1 - Generating Building Data with AI",
        content: `
            <!-- Responsive YouTube Wrapper Frame -->
            <div class="video-container">
                <iframe src="https://youtu.be/y8ukpGSUEGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" sandbox="allow-scripts allow-same-origin allow-presentation" allowfullscreen></iframe>
            </div>

            <p>We are pleased to present our very first video! This is a brief showcase of the capabilities of our Artificial Intelligence (AI).</p>
            
            <p>As with many structural engineering projects, it is inevitable that there will be a lot of different roles (e.g., Project Coordinators vs. Engineers vs. BIM Modellers vs. Drafting Team), and it can become overwhelming to control the storage and flow of the information.</p>
            
            <p>The idea is to integrate all of these different roles into one entity and controlled at the Common Data Environment (CDE). The video successfully demonstrates the AI's to simply take in a floor plan, analyse the structure, create an engineered structure, render a 3D structural model, and provide 3D and 2D steel reinforcement detailing - all in one sitting.</p>
            
            <p>With our AI, everything is streamlined into one easily managed project file, which contains the source data for all the outputs you'll need. The AI does all the calculations according to your project requirements. As seen in this video demonstration, you can easily switch between 3D model and 2D detailing views to visualize the data.</p>

            <p>The best thing about the AI is that it's flexible to suit your needs. We will tailor the AI to suit your building project requirements and formats.</p>
            
            <p>This demo project showcases a building with 8 levels, with the foundation at G/F and M/F, with an approximately 60m x 60m footprint, 2 elevator cores and 2 stair cores. The project file for this was generated <u>in just 5 minutes</u>.</p>

            <img src="assets/img/blog/blog01_1.png">
        `,
        tags: ["intro", "automation"]
    }
];