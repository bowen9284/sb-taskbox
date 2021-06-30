import * as React from 'react';
import { create } from 'react-test-renderer';
import TaskList from '../TaskList';
import { withPinnedTasks } from '../TaskList.stories';
import Task from '../Task';
describe('TaskList', () => {
  it('renders pinned tasks at the start of the list', () => {
    const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
    const tree = create(<TaskList tasks={withPinnedTasks} {...events} />);
    const rootElement = tree.root;
    const listofTasks = rootElement.findAllByType(Task);
    expect(listofTasks[0].props.task.title).toBe('Task 6 (pinned)');
  });
});