import { Container } from "react-bootstrap"
import Hero from "../common/Hero"

const Scan = () => {
    return (
        <main>
            <Hero />

            <Container fluid className="pt90 pb90">
                <Container>
                    <h2>Some Heading</h2>
                    <p>In this function, we are taking the error data and putting it in state to alert our user about the error. So if we have an error, we will display that error message.

                        In this function, the error data is put in state and used to alert users about the error. So if there's an error, an error message is displayed.

                        When you run this code code, you'll see the text, "Error: Request failed with status code 404".</p>
                </Container>
            </Container>
        </main>
    )
}

export default Scan;