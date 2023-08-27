import { filterDataByCommand } from "../utils/filterJson"

export default function Social() {
    const social = filterDataByCommand('social')
    return (
        <div className="font-ubuntu">
            <h3 className="font-semibold text-slate-400">Social Media</h3>
            {social.map((item, index) => (
                <div key={index} className="py-2">
                    <div className="grid grid-cols-3">
                        {item.content.map((contentItem, contentIndex) => (
                            <div key={contentIndex}>
                                <a href={contentItem.info} target="_blank" className=" text-slate-300 font-semibold">{contentItem.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
