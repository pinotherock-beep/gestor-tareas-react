import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { TaskProvider } from '../context/TaskContext.jsx';

test('permite agregar una tarea', async () => {
  render(<TaskProvider><BrowserRouter><App /></BrowserRouter></TaskProvider>);
  await userEvent.type(screen.getByLabelText(/nueva tarea/i), 'Estudiar React');
  await userEvent.click(screen.getByText(/agregar/i));
  expect(screen.getByText('Estudiar React')).toBeInTheDocument();
});
