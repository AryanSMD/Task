/// <reference types="vite/client" />

interface UserInfo {
    email: string,
    password: string
}

type FormTypes = 'public'|'private'
type SectionTypes = 'text'|'textarea'|'radio'|'checkbox'|'dropdown'|'file'

interface Form {
    form_id: string,
    form_type: FormTypes,
    form_title: string,
    description: string,
    sections: Sections[]
}

interface Sections {
    title: string,
    type: SectionTypes,
    required: boolean,
    properties: []
}