import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import { MaterialsPage, QuestionsPage, QuizPage, SkillsPage } from '@/pages';
import { CollectionPage } from '@/pages/collection-page';
import { ColectionDitails } from '@/pages/collection-details';

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout/>,
        children: [
            {path: '/', element: <CollectionPage/>},
            {path: '/question', element: <QuestionsPage/>},
            {path: '/quiz', element: <QuizPage/>},
            {path: '/materials', element: <MaterialsPage/>},
            {path: '/skills', element: <SkillsPage/>},
            {path: '/collection/:id', element: <ColectionDitails/>}
        ]
    }
])
