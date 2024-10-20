import Link from 'next/link';

export default function Resume() {
  return (
    <div className="relative flex flex-col items-center w-screen min-h-screen bg-zinc-950 bg-opacity-85 border-2 border-slate-500 rounded-lg text-slate-200 text-2xl p-8">
      
      {/* Header Section */}
      <div className="w-full flex justify-between border-b-2 border-slate-500 pb-4 mb-8">
        <div className="p-4">
          <h1 className="text-5xl mb-2">Adam Fesmire</h1>
          <p>Chattanooga, TN 37421</p>
          <p>731-614-3497</p>
          <p>cafesmire@gmail.com</p>
        </div>
        <div className="w-2/3 p-4">
          <p className="text-xl">
            Software Engineer with a Master&apos;s in Computer Science and hands-on experience in 
            full-stack development, cloud computing, and agile methodologies. Proficient in Java, 
            Python, JavaScript, and React, with expertise in building scalable web applications and 
            deploying cloud-based solutions using AWS and Kubernetes.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 w-full">
        
        {/* Education & Key Skills */}
        <div className="space-y-6">
          <div className="border-b-2 border-slate-500 pb-4 mr-56">
            <h1 className="text-4xl mb-4">Education</h1>
            <li>MS in Computer Science (2023)</li>
            <li>BS in Exercise Science (2011)</li>
          </div>

          <div>
            <h1 className="text-4xl mb-4">Key Skills</h1>
            <div className="ml-5 space-y-4">
              <div>
                <h2>Languages</h2>
                <li>Python</li>
                <li>Java, JavaScript</li>
                <li>C, C#, C++</li>
                <li>HTML, CSS</li>
              </div>

              <div>
                <h2>Frontend</h2>
                <li>Express JS</li>
                <li>React</li>
                <li>TailwindCSS</li>
              </div>

              <div>
                <h2>Backend</h2>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
              </div>

              <div>
                <h2>DevOps</h2>
                <li>CI/CD</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </div>

              <div>
                <h2>Cloud Services</h2>
                <li>AWS</li>
                <li>Azure</li>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience, Projects, and Capstone */}
        <div className="space-y-6">
          <div className="border-b-2 border-slate-500 pb-4">
            <h1 className="text-4xl mb-4">Work Experience</h1>

            <div className="mb-8">
              <h2 className="text-3xl">Support Staff & Team Trainer</h2>
              <h3>Results Physiotherapy | Fort Oglethorpe, GA</h3>
              <h3>August 2013 - May 2019</h3>
              <li>Guided patients through treatment plans and trained new staff hires to improve patient care.</li>
              <li>Collaborated with therapists to customize treatment plans and improve service quality.</li>
            </div>

            <div>
              <h2 className="text-3xl">Lead Personal Trainer</h2>
              <h3>The Rush Fitness Complex | Chattanooga, TN</h3>
              <h3>July 2007 - June 2014</h3>
              <li>Led a team of trainers to deliver fitness programs and foster client engagement.</li>
              <li>Developed customized workout plans, leading to significant client improvements.</li>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl">Projects:</h1>
            <Link 
              href="https://www.github.com/cafesmire" 
              target="_blank"
              className="text-blue-400 underline"
            >
              https://github.com/cafesmire
            </Link>
          </div>

          <div>
            <h1 className="text-4xl mb-4">Capstone Project</h1>
            <li>
              Developed deep learning models (ANNs, RNNs, LSTMs, GRUs) with PyTorch to predict 
              freezing of gait episodes in Parkinson&apos;s patients, improving prediction accuracy by 15%.
            </li>
            <li>Used TensorBoard to visualize model performance and fine-tune parameters.</li>
            <li>
              Demonstrated the ability to apply machine learning to real-world healthcare 
              problems, showcasing proficiency in AI technologies.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
