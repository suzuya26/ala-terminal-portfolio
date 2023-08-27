import { filterDataByCommand } from "../utils/filterJson"

export default function Skill() {
    const skill = filterDataByCommand('skill')
    return (
        <div className="font-ubuntu">
            <h3 className="font-semibold text-slate-400">Achieved Skills</h3>
            {skill.map((item, index) => (
                <div key={index} className="py-2">
                    {item.content.map((contentItem, contentIndex) => (
                        <div key={contentIndex}>
                            <h4 className=" text-slate-300 font-semibold">{contentItem.title}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            {contentItem.info.map((k, i) => (
                                <div key={i}>
                                    <div className="px-2 mb-1 font-medium">
                                        {k.title}
                                    </div>
                                    <div className="px-2 mb-1">
                                        {k.caption}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
