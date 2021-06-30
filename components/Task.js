import * as React from 'react';
import { TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { styles } from '../constants/globalStyles';
import PercolateIcons from '../constants/Percolate';
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <SafeAreaView style={styles.ListItem}>
      <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {state !== 'TASK_ARCHIVED' ? (
          <View style={styles.CheckBox} />
        ) : (
          <PercolateIcons name="check" size={20} color={'#2cc5d2'} />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Input Title"
        style={
          state === 'TASK_ARCHIVED'
            ? styles.ListItemInputTaskArchived
            : styles.ListItemInputTask
        }
        value={title}
        editable={false}
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <PercolateIcons
          name="star"
          size={20}
          color={state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
