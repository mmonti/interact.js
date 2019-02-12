import test from '@interactjs/_dev/test/test';
import * as helpers from '@interactjs/core/tests/_helpers';
import pointerUtils from '@interactjs/utils/pointerUtils';
import * as actions from './index';
test('actions integration', (t) => {
    const scope = helpers.mockScope();
    const event = pointerUtils.coordsToEvent(pointerUtils.newCoords());
    const element = scope.document.body;
    actions.install(scope);
    const interactable = scope.interactables.new(element);
    // make a dropzone
    scope.interactables.new(scope.document.documentElement).dropzone({});
    const interaction1 = scope.interactions.new({});
    interaction1.pointerDown(event, event, element);
    for (const name of scope.actions.names) {
        interaction1.start({ name }, interactable, element);
        interaction1.stop();
        t.doesNotThrow(() => {
            t.notOk(interaction1.interacting(), `${name} interaction starts and stops as expected`);
        }, `${name} start and stop does not throw`);
    }
    for (const order of [scope.actions.names, [...scope.actions.names].reverse()]) {
        const interaction2 = scope.interactions.new({});
        for (const name of order) {
            t.doesNotThrow(() => {
                interaction2.start({ name }, interactable, element);
                interaction2.pointerMove(event, event, element);
                interaction2.pointerUp(event, event, element, element);
                t.notOk(interaction2.interacting(), `${name} interaction starts, moves and ends as expected`);
            }, `${name} sequence does not throw`);
        }
    }
    t.end();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9ucy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLDRCQUE0QixDQUFBO0FBQzdDLE9BQU8sS0FBSyxPQUFPLE1BQU0saUNBQWlDLENBQUE7QUFDMUQsT0FBTyxZQUFZLE1BQU0sZ0NBQWdDLENBQUE7QUFDekQsT0FBTyxLQUFLLE9BQU8sTUFBTSxTQUFTLENBQUE7QUFFbEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDaEMsTUFBTSxLQUFLLEdBQW1CLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNqRCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQ2xFLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBO0lBRW5DLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFdEIsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckQsa0JBQWtCO0lBQ2xCLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3BFLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRS9DLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUUvQyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ3RDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDbkQsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFBO1FBRW5CLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSwyQ0FBMkMsQ0FBQyxDQUFBO1FBQ3pGLENBQUMsRUFBRSxHQUFHLElBQUksZ0NBQWdDLENBQUMsQ0FBQTtLQUM1QztJQUVELEtBQUssTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQzdFLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRS9DLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNsQixZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2dCQUNuRCxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBQy9DLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBRXRELENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxpREFBaUQsQ0FBQyxDQUFBO1lBQy9GLENBQUMsRUFBRSxHQUFHLElBQUksMEJBQTBCLENBQUMsQ0FBQTtTQUN0QztLQUNGO0lBRUQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO0FBQ1QsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICdAaW50ZXJhY3Rqcy9fZGV2L3Rlc3QvdGVzdCdcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnQGludGVyYWN0anMvY29yZS90ZXN0cy9faGVscGVycydcbmltcG9ydCBwb2ludGVyVXRpbHMgZnJvbSAnQGludGVyYWN0anMvdXRpbHMvcG9pbnRlclV0aWxzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2luZGV4J1xuXG50ZXN0KCdhY3Rpb25zIGludGVncmF0aW9uJywgKHQpID0+IHtcbiAgY29uc3Qgc2NvcGU6IEludGVyYWN0LlNjb3BlID0gaGVscGVycy5tb2NrU2NvcGUoKVxuICBjb25zdCBldmVudCA9IHBvaW50ZXJVdGlscy5jb29yZHNUb0V2ZW50KHBvaW50ZXJVdGlscy5uZXdDb29yZHMoKSlcbiAgY29uc3QgZWxlbWVudCA9IHNjb3BlLmRvY3VtZW50LmJvZHlcblxuICBhY3Rpb25zLmluc3RhbGwoc2NvcGUpXG5cbiAgY29uc3QgaW50ZXJhY3RhYmxlID0gc2NvcGUuaW50ZXJhY3RhYmxlcy5uZXcoZWxlbWVudClcbiAgLy8gbWFrZSBhIGRyb3B6b25lXG4gIHNjb3BlLmludGVyYWN0YWJsZXMubmV3KHNjb3BlLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZHJvcHpvbmUoe30pXG4gIGNvbnN0IGludGVyYWN0aW9uMSA9IHNjb3BlLmludGVyYWN0aW9ucy5uZXcoe30pXG5cbiAgaW50ZXJhY3Rpb24xLnBvaW50ZXJEb3duKGV2ZW50LCBldmVudCwgZWxlbWVudClcblxuICBmb3IgKGNvbnN0IG5hbWUgb2Ygc2NvcGUuYWN0aW9ucy5uYW1lcykge1xuICAgIGludGVyYWN0aW9uMS5zdGFydCh7IG5hbWUgfSwgaW50ZXJhY3RhYmxlLCBlbGVtZW50KVxuICAgIGludGVyYWN0aW9uMS5zdG9wKClcblxuICAgIHQuZG9lc05vdFRocm93KCgpID0+IHtcbiAgICAgIHQubm90T2soaW50ZXJhY3Rpb24xLmludGVyYWN0aW5nKCksIGAke25hbWV9IGludGVyYWN0aW9uIHN0YXJ0cyBhbmQgc3RvcHMgYXMgZXhwZWN0ZWRgKVxuICAgIH0sIGAke25hbWV9IHN0YXJ0IGFuZCBzdG9wIGRvZXMgbm90IHRocm93YClcbiAgfVxuXG4gIGZvciAoY29uc3Qgb3JkZXIgb2YgW3Njb3BlLmFjdGlvbnMubmFtZXMsIFsuLi5zY29wZS5hY3Rpb25zLm5hbWVzXS5yZXZlcnNlKCldKSB7XG4gICAgY29uc3QgaW50ZXJhY3Rpb24yID0gc2NvcGUuaW50ZXJhY3Rpb25zLm5ldyh7fSlcblxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBvcmRlcikge1xuICAgICAgdC5kb2VzTm90VGhyb3coKCkgPT4ge1xuICAgICAgICBpbnRlcmFjdGlvbjIuc3RhcnQoeyBuYW1lIH0sIGludGVyYWN0YWJsZSwgZWxlbWVudClcbiAgICAgICAgaW50ZXJhY3Rpb24yLnBvaW50ZXJNb3ZlKGV2ZW50LCBldmVudCwgZWxlbWVudClcbiAgICAgICAgaW50ZXJhY3Rpb24yLnBvaW50ZXJVcChldmVudCwgZXZlbnQsIGVsZW1lbnQsIGVsZW1lbnQpXG5cbiAgICAgICAgdC5ub3RPayhpbnRlcmFjdGlvbjIuaW50ZXJhY3RpbmcoKSwgYCR7bmFtZX0gaW50ZXJhY3Rpb24gc3RhcnRzLCBtb3ZlcyBhbmQgZW5kcyBhcyBleHBlY3RlZGApXG4gICAgICB9LCBgJHtuYW1lfSBzZXF1ZW5jZSBkb2VzIG5vdCB0aHJvd2ApXG4gICAgfVxuICB9XG5cbiAgdC5lbmQoKVxufSlcbiJdfQ==