import { IState } from '@/store/IState';
import { Module } from 'vuex';
import { IModuleState } from './types';

const state: IModuleState = {
  bar: false
};

const module: Module<IModuleState, IState> = {
  namespaced: true,
  state,
};

export default module;
