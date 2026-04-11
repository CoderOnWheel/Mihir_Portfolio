const SkillBar = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded">
        <div className="h-full bg-white" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;