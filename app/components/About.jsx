import { filterDataByCommand } from "../utils/filterJson"

export default function About() {
    const about = filterDataByCommand('about')
    return (
        <div>
            {about.map((item, index) => (
                <div key={index}>
                    {item.content.map((contentItem, contentIndex) => (
                        <div key={contentIndex}>
                            <h3 className="font-semibold text-slate-400">{contentItem.title}</h3>
                            <p className="py-2">{contentItem.caption}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
