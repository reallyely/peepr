
export default function SampleUI() {
  return <>
    <div class="main-container">
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" placeholder="Search for anything, documents, actions, contacts..." />
        <span class="keyboard-shortcut" style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-tertiary);">⌘ + K</span>
      </div>

      <nav class="tabs">
        <div class="tab active">All</div>
        <div class="tab">
          <span class="icon">📄</span>
          Documents
        </div>
        <div class="tab">
          <span class="icon">✓</span>
          Tasks
        </div>
        <div class="tab">
          <span class="icon">👤</span>
          Contacts
        </div>
        <div class="tab">
          <span class="icon">⚡</span>
          Actions
        </div>
      </nav>

      <div class="card">
        <div class="section-header">
          <div>Recent Actions</div>
          <div class="section-count">2</div>
        </div>

        <div class="action-item">
          <div class="action-icon">✉️</div>
          <div>
            <div class="action-text">Draft an email</div>
            <div class="action-meta">Action</div>
          </div>
        </div>

        <div class="action-item">
          <div class="action-icon">✓</div>
          <div>
            <div class="action-text">Create a task</div>
            <div class="action-meta">Action</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="section-header">
          <div>Documents</div>
          <div class="section-count">3</div>
        </div>

        <div class="document-item">
          <div class="document-icon">📄</div>
          <div class="document-info">
            <div class="document-name">mydoc.pdf</div>
            <div class="document-meta">4564 KB</div>
          </div>
        </div>

        <div class="document-item">
          <div class="document-icon">📄</div>
          <div class="document-info">
            <div class="document-name">design_brief.pdf</div>
            <div class="document-meta">2890 KB</div>
          </div>
        </div>

        <div class="document-item">
          <div class="document-icon">📄</div>
          <div class="document-info">
            <div class="document-name">123-invoice-payment.pdf</div>
            <div class="document-meta">1654 KB</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="section-header">
          <div>Contacts</div>
          <div class="section-count">3</div>
        </div>

        <div class="contact-item">
          <div class="avatar" style="background: var(--gradient-primary);">BL</div>
          <div class="contact-info">
            <div class="contact-name">Boyd Larkin</div>
            <div class="contact-email">boydlarkin@gmail.com</div>
          </div>
          <div class="status-indicator" style="background-color: var(--status-online);"></div>
        </div>

        <div class="contact-item">
          <div class="avatar" style="background: var(--gradient-secondary);">VH</div>
          <div class="contact-info">
            <div class="contact-name">Violet Hauck</div>
            <div class="contact-email">violethuack@gmail.com</div>
          </div>
          <div class="status-indicator" style="background-color: var(--status-away);"></div>
        </div>

        <div class="contact-item">
          <div class="avatar" style="background: var(--gradient-special);">CJ</div>
          <div class="contact-info">
            <div class="contact-name">Clifford Jacobs IV</div>
            <div class="contact-email">cliffordjacobs91@gmail.com</div>
          </div>
          <div class="status-indicator" style="background-color: var(--status-offline);"></div>
        </div>
      </div>

      <div class="flex gap-4" style="margin-top: var(--spacing-lg);">
        <button class="button" style="background: var(--gradient-primary);">Primary Action</button>
        <button class="button" style="background: var(--gradient-secondary);">Secondary Action</button>
        <button class="button" style="background: var(--gradient-success);">Success Action</button>
      </div>
    </div>
  </>
}
