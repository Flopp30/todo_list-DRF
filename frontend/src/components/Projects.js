import React from "react";
import {Link} from "react-router-dom";
import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";


export const PROJECT_COLUMN_NAMES = ['Number', 'Name', 'Users', 'Repository link', 'Created at', 'Tasks']

export const UserItem = ({user}) => {
    return (
        <div><Link to={`/users/${user.id}`} class='customLink'>{user.username}</Link></div>
    )
}

export const TaskItem = ({task}) => {
    return (
        <div><Link to={`/tasks/${task.id}`} class='customLink'> - {task.number}</Link></div>
    )
}

export const ProjectItem = ({item, tasks, users}) => {
    let projectTasks = tasks.filter(task => task.project === item.id).slice(0, 3)
    let projectUsers = users.filter(user => item.users.includes(user.id)).slice(0, 3)
    return (<Tr>
        <Td><Link class='customLink' to={`/projects/${item.id}`}>{item.number}</Link></Td>
        <Td>{item.name}</Td>
        <Td>{projectUsers.map(user => <UserItem user={user}/>)}</Td>
        <Td><a href={item.repoLink}>{item.repoLink}</a></Td>
        <Td>{item.createdAt.slice(0,10)}</Td>
        <Td>{projectTasks.map(task => <TaskItem task={task}/>)}</Td>
    </Tr>)
}


export const ProjectList = ({items, tasks, users}) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                <Thead>
                    <Tr>
                        {PROJECT_COLUMN_NAMES.map(item => <Th>{item}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((item) => <ProjectItem users={users} item={item} tasks={tasks}/>)}
                </Tbody>
            </Table>
        </TableContainer>)
}

