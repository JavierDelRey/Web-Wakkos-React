import "../../../style.css"
import calendarImg from "./Calendar.png"; //Importar imágenes
import upcomingImg from "./Upcoming.png";

export default function Mainsidebar() {
    return (
        <div className="content">
            <div>
                <div className="line" />
                <CourseSection title="Delegate Courses" />
                <div className="line" />
                <CourseSection title="Trainer Courses" />
            </div>
        </div>
    );
}

function CourseSection({ title }) {
    return (
        <div className="content1">
            <h2>{title}</h2>
            <div className="courses">
                <img src={upcomingImg} alt="Imagen no disponible" />
                <p>Upcoming</p>
            </div>
            <div className="courses">
                <img src={calendarImg} alt="Imagen no disponible" />
                <p>Past</p>
            </div>
        </div>
    );
}
