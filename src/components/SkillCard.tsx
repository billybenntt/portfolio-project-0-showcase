import React from "react";

function SkillCard(props: any) {

    const {title, description, icons} = props

    return (
        <div className="skill-card">
            <div className="icons">
                {icons.map((item: React.ReactElement) => item)}
            </div>

            <h3 className="text-md">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default SkillCard
