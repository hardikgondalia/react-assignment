import { create } from 'zustand';
import { Member } from '../../features/memberManage/types/member';

type MemberStore = {
  members: Member[];
  selectedMember: Member | null;
  setMembers: (members: Member[]) => void;
  selectMember: (member: Member) => void;
  clearSelectedMember: () => void;
};

export const useMemberStore = create<MemberStore>((set) => ({
  members: [],
  selectedMember: null,
  setMembers: (members) => set({ members }),
  selectMember: (member) => set({ selectedMember: member }),
  clearSelectedMember: () => set({ selectedMember: null }),
}));