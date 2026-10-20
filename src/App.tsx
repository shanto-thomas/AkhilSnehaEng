/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { EngagementData, defaultEngagementData } from './data/defaultConfig';
import { ContinuousInvitation } from './components/ContinuousInvitation';
import { InvitationLoader } from './components/InvitationLoader';

export default function App() {
  const [data] = useState<EngagementData>(defaultEngagementData);
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#fbf5f6]">
      {showLoader && (
        <InvitationLoader onOpen={() => setShowLoader(false)} />
      )}

      <ContinuousInvitation data={data} />
    </div>
  );
}
