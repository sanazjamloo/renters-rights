import React from 'react';
import RentersLayout from './RentersLayout'

export default function RentersReasonsForm({
  token,
}) {
  return (
    <RentersLayout className="renters-container">
      <div className="home-links">
        <div className="container">
          <form
            className="form-horizontal"
            method="post"
          >
            <h3>Did your landlord give you reasons for evicting you in writing?</h3>
            <div className="checkbox" reyquired="true">
              <label>
                <input name="gaveReason" type="radio" value="yes"/> Yes
              </label>
              <br/>
              <label>
                <input name="gaveReason" type="radio" value="no"/> No
              </label>
              <br/>
            </div>

            <br/>
            <h3>What were their reasons?</h3>
            <h5>Check all that apply</h5>
            <div className="checkbox">
              <label>
                <input name="nonpayment" type="checkbox"/> Non-payment of rent
              </label>
              <br/>
              <label>
                <input name="lease" type="checkbox"/> Violation of lease
              </label>
              <br/>
              <label>
                <input name="damage" type="checkbox"/> Damage to the apartment
              </label>
              <br/>
              <label>
                <input name="refusalNew" type="checkbox"/> Refusal to agree to similar or new rental agreement
              </label>
              <br/>
              <label>
                <input name="nuisance" type="checkbox"/> Nuisance behavior
              </label>
              <br/>
              <label>
                <input name="refusing" type="checkbox"/> Refusing access to unit
              </label>
              <br/>
              <label>
                <input name="sublease" type="checkbox"/> Illegally sub-leasing to an unapproved tenant
              </label>
              <br/>
              <label>
                <input name="rehabilitation"type="checkbox"/> Substantial rehabilitation of the apartment
              </label>
              <br/>
              <label>
                <input name="ellisAct" type="checkbox"/> Ellis Act removal
              </label>
              <br/>
              <label>
                <input name="ownerMoveIn" type="checkbox"/> Owner move-in
              </label>
              <br/>
              <label>
                <input name="orderToVacate" type="checkbox"/> Order to vacate
              </label>
              <br/>
              <label>
                <input name="leavingUnpermittedUnit" type="checkbox"/> Leaving an unpermitted apartment
              </label>
            </div>

            <input name="authenticity_token" type="hidden" value={token} />
            <br/>
            <button
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>   
          </form>
        </div>
      </div>
    </RentersLayout>
  )
}
