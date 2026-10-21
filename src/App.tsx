/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { EngagementData, defaultEngagementData } from './data/defaultConfig';
import { ContinuousInvitation } from './components/ContinuousInvitation';
import { BlossomLoader } from './components/BlossomLoader';

export default function App() {
  const [data] = useState<EngagementData>(defaultEngagementData);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#fbf5f6]">
      {!isInvitationOpen && (
        <BlossomLoader onOpen={() => setIsInvitationOpen(true)} />
      )}

      <ContinuousInvitation data={data} />
    </div>
  );
}
