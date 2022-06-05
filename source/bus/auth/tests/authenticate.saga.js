import {authenticate} from "../saga/workers";
import {uiAction} from "../../ui/actions";
import {apply} from "redux-saga/effects";
import {api} from "../../../REST";
import {actions} from "react-redux-form";
import {profileActions} from "../../profile/actions";
import {authAction} from "../actions";
import {expectSaga} from "redux-saga-test-plan";

describe("authenticate saga", () => {
    test('should complete a 200 status response scenario', async () => {
        await expectSaga(authenticate)
            .put(uiAction.startFetching())
            .provide([[apply(api, api.auth.authenticate), __.fetchResponseSuccess]])
            .apply(localStorage, localStorage.setItem, ['token', __.token])
            .put(actions.change('forms.user.profile.firstName', __.userProfile.firstName))
            .put(actions.change('forms.user.profile.lastName', __.userProfile.lastName))
            .put(profileActions.fillProfile(__.userProfile))
            .put(authAction.authenticate())
            .put(uiAction.startFetching())
            .put(uiAction.initialize())
            .run();
    });

    test('should complete a 401 status response scenario', async () => {
        await expectSaga(authenticate)
            .put(uiAction.startFetching())
            .provide([[apply(api, api.auth.authenticate), __.fetchResponseFail401]])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .returns(null)
            .put(uiAction.startFetching())
            .put(authAction.initialize())
            .run();
    })

    test('should complete a 400 status response scenario', async () => {
        await expectSaga(authenticate)
            .put(uiAction.startFetching())
            .provide([[apply(api, api.auth.authenticate), __.fetchResponseFail400]])
            .put(uiAction.emitError(__.error, 'authenticate worker'))
            .put(uiAction.startFetching())
            .put(authAction.initialize())
            .run()
    })
})
