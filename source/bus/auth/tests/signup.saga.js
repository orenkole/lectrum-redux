import {authAction} from "../actions";
import {cloneableGenerator} from "redux-saga/utils";
import {signup} from "../saga/workers";
import {uiAction} from "../../ui/actions";
import {apply, put} from "redux-saga/effects";
import {api} from "../../../REST";

const signupAction = authAction.signupAsync((__.userProfile));

const saga = cloneableGenerator(signup)(signupAction);
let clone = null;

describe('signup saga', function () {
    describe('should pass until response received', () => {
        test('should dispatch "startFetching" action', () => {
            expect(saga.next().value).toEqual(put(uiAction.startFetching()))
        })

        test('should call a fetch request', () => {
            expect(saga.next().value).toEqual(apply(api, api.auth.signup, [__.userProfile]))
            clone = saga.clone;
        })
    })

    describe('should handle a 400 status response', () => {
        test('a fetch request should return 400 status response', () => {
            expect(clone.next(__.fetchResponseFail400).value)
                .toEqual(apply(__.fetchResponseFail400, __.fetchResponseFail400))
        })

        test('should contain a response data object', () => {
            expect(clone.next(__responseDataFail).value)
                .toEqual(put(uiAction.emitError(__.error, 'signup worker')))
        })

        test('sould dispatch "stopFetching" action', () => {
            expect(clone.next().value).toEqual(put(uiAction.stopFetching()))
        })

        test('should finish', () => {
            expect(clone.next().done).toBe(true)
        })
    })

    describe('should handle a 200 status response', () => {
        test('a fetch request should return a 200 status response object', () => {
            expect(saga.next(__.fetchResponseSuccess).value)
                .toEqual(apply(__.fetchResponseSuccess, __.fetchResponseSuccess))
        })

        test('should dispatch "fillProfile" action', () => {
            expect(saga.next(__.responseData).value)
                .toMatchInlineSnapshot()
        })

        test('should dispatch "authenticate" action', () => {
            expect(saga.next().value)
                .toMatchInlineSnapshot();
        })

        test('expect dispatch "stopFetchin" action', () => {
            expect(saga.next().value)
                .toMatchInlineSnapshot();
        })

        test('should finish', () => {
            expect(saga.next().done).toBe(true)
        })
    })
});
