import Image from 'next/image'

function SkillCard(props: any) {


    const {title, description, icons} = props


    const iconList = icons.map((_: string, index: number) => {
        return <Image key={index} src={`icons/${icons[index]}`} height={40} width={40} alt="icon"></Image>
    })


    return (
        <div className="skill-card">
            <span className="icon">
                {iconList}
            </span>
            <h3 className="text-md">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default SkillCard
