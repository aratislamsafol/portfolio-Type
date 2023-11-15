export type CardProps =  {
    img: string,
    postion: string, 
    company?:string,
    jobType?:string, 
    startData?:string, 
    lastDate?:string, 
    job_status?:string, 
    job_description?:string,
    border?: boolean | undefined,
    hover?: boolean,
}