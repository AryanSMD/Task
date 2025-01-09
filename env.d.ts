/// <reference types="vite/client" />

interface UserInfo {
    email: string,
    password: string
}

type FormTypes = 'public'|'private'
type SectionTypes = 'text'|'textarea'|'radio'|'checkbox'|'dropdown'|'file'
type Sections = TextType|TextareaType|RadioType|CheckboxType|DropdownType|FileType

interface Form {
    form_type: FormTypes,
    form_title: string,
    description: string,
    sections: Sections[]
}

interface TextType {
    title: string,
    type: 'text',
    required: boolean
}

interface TextareaType {
    title: string,
    type: 'textarea',
    required: boolean
}

interface RadioType {
    title: string,
    type: 'radio',
    required: boolean,
    properties: string[]
}

interface CheckboxType {
    title: string,
    type: 'checkbox',
    required: boolean,
    properties: string[]
}

interface DropdownType {
    title: string,
    type: 'dropdown',
    required: boolean,
    properties: string[]
}

interface FileType {
    title: string,
    type: 'file',
    required: boolean,
}