import SkillBar from '../SkillBar';

export default function SkillBarExample() {
  return (
    <div className="p-8 bg-background max-w-md">
      <SkillBar skill="React" percentage={85} />
    </div>
  );
}