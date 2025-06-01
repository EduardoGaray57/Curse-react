import { Form } from "react-bootstrap"
import { SUPPORTED_LANGUAGES } from "../constants"
import { type FunctionComponent} from 'react'


interface Props {
    onChange: (language: string) => void
}

export const LanguageSelector: FunctionComponent<Props> = ({ onChange }) => {
    return (
        <Form.Select aria-label="Selecciona el idioma">
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, lateral]) => (
                <option key={key} value={key}>
                    {lateral}
                </option>
            ))}
        </Form.Select>
    )
}