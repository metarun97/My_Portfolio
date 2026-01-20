const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced', icon: '/icon/html.png' },
    { name: 'CSS', level: 'Advanced', icon: '/icon/css.png' },
    { name: 'SASS', level: 'Advanced', icon: '/icon/sass.png' },

    {
      name: 'Tailwind CSS',
      level: 'Intermediate',
      icon: '/icon/tailwind.png',
    },
    {
      name: 'JavaScript',
      level: 'Intermediate',
      icon: '/icon/javascript.png',
    },
    {
      name: 'React',
      level: 'Intermediate',
      icon: '/icon/react.png',
    },
    { name: 'VS Code', level: 'Basic', icon: '/icon/vscode.png' },
    { name: 'Git', level: 'Basic', icon: '/icon/git.png' },
    { name: 'GitHub', level: 'Basic', icon: '/icon/github.png' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">Skills</h2>
          <p className="mt-3 text-gray-600 text-lg md:text-xl lg:text-2xl">
            Technologies I use to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition flex items-center justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  {skill.name}
                </h3>
                <p className="text-sm md:text-lg lg:text-xl text-gray-500 text-semibold mt-1">
                  {skill.level}
                </p>
              </div>
              <div className="aspect-square w-16 h-16">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
