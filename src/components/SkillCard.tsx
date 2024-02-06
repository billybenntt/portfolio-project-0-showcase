import Image from 'next/image'

function SkillCard(props: any) {



    const { title, description, icons } = props

    return (
        <div className="skill-card">
            <span className="icon">
                <Image src={`icons/${icons[0]}`} height={40} width={40} alt="icon"/>
                <Image src={`icons/${icons[1]}`}  height={40} width={40} alt="icon"/>
            </span>
            <h3 className="text-md">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default SkillCard
