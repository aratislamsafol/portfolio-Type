import Skill from "./Skill";

export default function SkillBar() {
  const skillData = [
    {
      name: 'Html',
      rating: 98,
    },
    {
      name: 'Js',
      rating: 95,
    },
    {
      name: 'Css',
      rating: 88,
    },
    {
      name: 'Php',
      rating: 80,
    },
  ];
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'20px', marginTop:'30px'}}>
      {skillData.map(data=>
         <Skill name={data.name} width={data.rating}/>
        )}
    </div>
  )
}
