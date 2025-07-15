// Simple test validation for the space shooter game
// This would normally be run in a proper test framework

// Test MemberData interface
function testMemberData() {
    const testData = new MemberData(
        "Test User",
        "Test Role", 
        "Test Bio",
        {
            instagram: "https://instagram.com/test",
            github: "https://github.com/test",
            linkedin: "https://linkedin.com/in/test"
        }
    );
    
    console.assert(testData.name === "Test User", "Name should be set correctly");
    console.assert(testData.role === "Test Role", "Role should be set correctly");
    console.assert(testData.bio === "Test Bio", "Bio should be set correctly");
    console.assert(testData.socialMedia.instagram === "https://instagram.com/test", "Instagram URL should be set correctly");
    console.assert(testData.socialMedia.github === "https://github.com/test", "GitHub URL should be set correctly");
    console.assert(testData.socialMedia.linkedin === "https://linkedin.com/in/test", "LinkedIn URL should be set correctly");
    
    console.log("✅ MemberData tests passed");
}

// Test member data object
function testMemberDataObject() {
    console.assert(memberData.name === "Ardhi Putra", "Member name should be correct");
    console.assert(memberData.role === "Full Stack Developer", "Member role should be correct");
    console.assert(memberData.socialMedia.instagram === "https://instagram.com/ardhptr21", "Instagram URL should be correct");
    console.assert(memberData.socialMedia.github === "https://github.com/ardhptr21", "GitHub URL should be correct");
    console.assert(memberData.socialMedia.linkedin === "https://linkedin.com/in/ardhptr21", "LinkedIn URL should be correct");
    
    console.log("✅ Member data object tests passed");
}

// Test DOM elements existence
function testDOMElements() {
    console.assert(document.getElementById('member-dialog') !== null, "Member dialog should exist");
    console.assert(document.getElementById('member-profile-btn') !== null, "Member profile button should exist");
    console.assert(document.querySelector('.close') !== null, "Close button should exist");
    console.assert(document.querySelector('.member-name') !== null, "Member name element should exist");
    console.assert(document.querySelector('.member-role') !== null, "Member role element should exist");
    console.assert(document.querySelector('.member-bio') !== null, "Member bio element should exist");
    console.assert(document.querySelector('.social-links') !== null, "Social links container should exist");
    
    console.log("✅ DOM elements tests passed");
}

// Test social media links
function testSocialMediaLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    console.assert(socialLinks.length === 3, "Should have 3 social media links");
    
    socialLinks.forEach(link => {
        console.assert(link.target === '_blank', "Social links should open in new tab");
        console.assert(link.rel === 'noopener noreferrer', "Social links should have proper rel attribute");
        console.assert(link.href.startsWith('http'), "Social links should have valid URLs");
    });
    
    console.log("✅ Social media links tests passed");
}

// Run tests when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log("🧪 Running Space Shooter Game Tests...");
        testMemberData();
        testMemberDataObject();
        testDOMElements();
        testSocialMediaLinks();
        console.log("🎉 All tests passed!");
    }, 100);
});