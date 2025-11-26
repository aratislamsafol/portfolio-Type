import Skill from "./Skill";

export default function SkillBar() {
const skillData = [
  {
    name: 'React.js',
    rating: 98,
  },
  {
    name: 'Node.js / Express',
    rating: 92,
  },
  {
    name: 'PHP / Laravel',
    rating: 94,
  },
  {
    name: 'ASP.NET Core / C#',
    rating: 90,
  },
  {
    name: 'TypeScript',
    rating: 94,
  },
  {
    name: 'GraphQL & REST APIs',
    rating: 88,
  },
  {
    name: 'AWS / Cloud Architecture',
    rating: 85,
  },
  {
    name: 'Microservices Design',
    rating: 83,
  },
  {
    name: 'Database Design (SQL & NoSQL)',
    rating: 92,
  },
  {
    name: 'Microsoft SQL Server',
    rating: 88,
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
