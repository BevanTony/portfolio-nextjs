import React from 'react'
import Bio from './Bio'

export default {
    title: 'Component/Bio',
    component : Bio,

}

const Template = (args) => (
    <Bio
    name='Bevan Tony Medrano'
    role='Web Developer'
    />
)

export const Default = Template.bind({})