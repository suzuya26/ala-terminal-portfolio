import { filterDataByCommand } from "../utils/filterJson"

export default function Project() {
    const project = filterDataByCommand('project')
    return (
        <div className="font-ubuntu">
            <h3 className="font-semibold text-slate-400">Project list</h3>
            {project.map((item, index) => (
                <div key={index} className="py-2">
                    {item.content.map((contentItem, contentIndex) => (
                        <div key={contentIndex}>
                            <h4 className=" text-slate-200 font-medium">{contentItem.title}</h4>
                            <div className="px-2 mb-2">
                                <p>{contentItem.info.title} : </p>
                                <ul className="list-outside list-disc ps-4">
                                    {contentItem.info.caption.map((k,i)=>(
                                        <li key={i}>{k}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
