import Skill from "./Skill";

export default function SkillBar() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'20px', marginTop:'30px'}}>
      <Skill />
      <Skill />
      <Skill />
      <Skill />
      
    </div>
  )
}
