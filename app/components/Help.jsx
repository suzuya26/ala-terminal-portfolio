import cv from "../data/cv.json"

export default function Help() {
    return (
        <>
            {cv.map((item, index) => (
                <div key={index} className="help-grid py-1">
                    <p className="text-slate-300">{item.command}</p>
                    <div className="col-span-5">
                        {item.description}
                    </div>
                </div>
            ))}
        </>
    )
}
