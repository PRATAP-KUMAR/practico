import "../stylesheets/departments.css"

const Departments = () => {
    const DEPARTMENTS = ['AGRICULTURE', 'ARCHTECTURE', 'MECHANICAL', 'CIVIL', 'MBA', 'AUTOMOBILE'];

    return (
        <div className="departments-cnt">
            <div className="lorem-ipsum-txt">
                Lorem Ipsum Dolor
            </div>
            <div className="departments-txt">DEPARTMENTS</div>
            <div className="departments-block">
                {
                    DEPARTMENTS.map((department) => (
                        <div className="department">{department}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Departments;