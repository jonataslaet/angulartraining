import { ChangeTargetClickEventDirective } from "./change-target-click-event.directive";

const setup = () => {
  const directive = new ChangeTargetClickEventDirective();
  return {directive};
}

describe('ChangeTargetClickEventDirective', () => {

  it('when p is clicked then catch event on his father', () => {
    const { directive } = setup();
    const expectedEvent = new MouseEvent('click');
    //Pendente
  });

});
