const CardsReport = ({ title, description, report_url }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>
                {description}
            </p>
            <a href={report_url} className="text-blue-500 hover:underline">
                view report
            </a>
        </div>
    )
}

export default CardsReport;