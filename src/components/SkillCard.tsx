import Image from 'next/image'

function SkillCard(props: any) {



    const { title, description, icons } = props

    console.log(icons)
    return (
        <div className="skill-card">
            <span className="icon">
                <Image src={`icons/${icons[0]}`} height={50} width={50} alt="icon"/>
                <Image src={`icons/${icons[1]}`}  height={50} width={50} alt="icon"/>
            </span>
            <h3 className="text-md">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default SkillCard
