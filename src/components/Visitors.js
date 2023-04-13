import { animated, useSpring } from "@react-spring/web";
import Icon from "./Icon";
import "../stylesheets/visitors.css";


const Visitors = () => {
    function Number({ n }) {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: {
                duration: 2000 // duration for the whole animation form start to end
            }
        })
        return (
            <animated.div>
                {number.to((n) => n.toFixed(0))}
            </animated.div>
        )
    }

    const TEXTS_ARRAY = [
        ['FaStar', 'VISITS ORGANIZED', 12345],
        ['FaSquare', 'LOREM IPSUM', 12345],
        ['FaCheck', 'VISITED STUDENTS', 12345],
        ['FaSquare', 'HAPPY CLIENTS', 12345]
    ];

    return (
        <div className="visits-cnt">
            {
                TEXTS_ARRAY.map((array) => (
                    <div className="visits-box">
                        <div className="icon"><Icon iconName={array[0]} /></div>
                        <div className="visitors-desc">
                            <div>{array[1]}</div>
                            <Number n={array[2]} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Visitors;

